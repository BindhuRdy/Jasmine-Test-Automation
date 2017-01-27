function checkForECG(title)
{
    if (title.search("ECG") != -1)
        return true;
    return false;
}

function initECG()
{
    buildECGheader();
	buildECGlist();
	showECGbody();	
}

function buildECGheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br/><p class='test' onclick='javascript:expandcollapse(\"ecgarrow\",\"ecgbody\");'>CoMorbidities from ECG Report&nbsp;&nbsp;"
			  + "<img id='ecgarrow' border='0' src='" + arrowdownimg + "' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#ecgheader').html(tableBody);	
	return;
}

function getPdfDateECG(content) {
    var sentences = new Array();
	sentences = break_sentences(content, "\n");
	var title_date = "Confirmed by";
    var pdf_date = "";
	
	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			var pos = sentences[i].indexOf(title_date);
			pdf_date = sentences[i].split("Confirmed by")[1];
			break;
		}
	}
    var retArr = [];
    if (pdf_date.length > 0)
    {
        var arr = pdf_date.split("on");
        if (arr.length > 0)
        {
            pdf_date = arr[1] + " by " + arr[0];   
            retArr.push(arr[1]);
            retArr.push(arr[0]);
        }
    }    
	return retArr;
}

function buildECGlist() {	
	var tableBody = "";
	tableBody += "<select id='selectECGList' style='width:50%;font-size:16px'  onChange=\"showSelectedPDF('ECG');\">";
	if (no_of_ecg_reports != 0) {
		tableBody += "<option value='first option'>Select the report to show</option>";
		for (var i = 0; i < no_of_ecg_reports; i++) {
            var dateArr = getPdfDateECG(ecgTransformedPdfList[i]);
            var dateStr = dateArr.join(" by ");
			tableBody += "<option value='" + ecgPDFTitles[i] + "'>" + ecgPDFTitles[i] + " ("+ dateStr + ")</option>";			
		}
	}
	else {
		tableBody += "<option value='firstOption'>No report</option>";
	}
	tableBody += "</select>";
	tableBody += "\t<a href=\"#ecgshow\"></a>";
	$('#ecglist').html(tableBody);	
	return;
}

function showECGbody()
{
    var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	for (var i = 0; i < ecgTransformedPdfList.length; i++) {
		var pdfContent = ecgTransformedPdfList[i];		
		tableBody = buildECGbody(i, pdfContent, tableBody);
	}
	/*tableBody += "<tr><td><br><input id='ecgComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='ecgCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";		*/    
	$('#ecgbody').html(tableBody);	
	return;    
}

function buildECGbody(index, contents, tableBody) {
	var comorb_array = new Array();
	comorb_array = func_category(ecgPDFTitles[index]); // this method is defined in radiology.js
	if (comorb_array == null) 
        return tableBody;
    var report_data = break_sentences(ecgTransformedPdfList[index], "\n");	// this method is defined in radiology.js			
    final_comorb = determine_final_comorb(report_data, comorb_array);    // this method is defined in radiology.js
    var final_sentences = new Array();
    final_sentences = check_comorb_in_sentences(report_data, final_comorb, negPhrases_two_d, conjunctions_two_d);// this method is defined in radiology.js
    var temp_comorb = determine_final_comorb(final_sentences, final_comorb);
    final_comorb = temp_comorb;        
    ecgarray_all = final_comorb;
    //var str = "Supraventricular tachycardia";
    if (final_comorb == null || final_comorb.length == 0)
        return tableBody;                        
    var impression_prefix = 0;
    var findings_prefix = 1;
    for (var i = 0; i < final_comorb.length; i++) 
    {
        var reportPrefix = '' + index+impression_prefix + i;
        if (!doShowComorbIfNotPreviouslyCommitted(final_comorb[i].display, ecgPDFTitles[index], getPdfDateECG(contents), index, 'ECG'))
        {
            continue;
        }
        var dateArr = getPdfDateECG(contents);
        dateArr[1] = dateArr[1].replace(/,/g, ''); // Commas occur in the doctor name in case of ECG report which we need to remove before committing
        var pvalueStr = "GROUP#$#" + final_comorb[i].display + "#$#" + final_comorb[i].level.length + "#$#" + ecgPDFTitles[index] + "," + dateArr.join(",");
        tableBody += "<tr><td><table cellspacing='0px'>"
                  + "<tr id='ecg"+reportPrefix+"' onmouseover=\"mouseOverPara('ecgSentencesImg"+reportPrefix+"','ecgSentencesCol"+reportPrefix+"');makeDivVisibleRR('ecgSentences"+reportPrefix+"', this);\" onmouseout=\"mouseOutPara('ecgSentencesImg"+reportPrefix+"','ecgSentencesCol"+reportPrefix+"');makeDivHiddenRR('ecgSentences"+reportPrefix+"', this);\">"
                  + "<td><div id='ecgSentencesCol"+reportPrefix+"'>"
                  + "<a>"
                  + "<b><font color='#0000FF'><input class='rrPart' id='ecgGroup"+reportPrefix+"' type='checkbox' value='"+pvalueStr+"' onclick='javascript:otherForm(\"ecgChkGrp"+reportPrefix+"\",\"ecgGroup"+reportPrefix+"\");'>"+final_comorb[i].display
                  + "</font></b></a></div>";
        tableBody += "<div id='ecgChkGrp"+reportPrefix+"' style='display: none; margin-left: 60px;'>"; 
		var prefix = "~" + final_comorb[i].display ;
		var suffix = "^," + ecgPDFTitles[index] + "," + dateArr.join(",");
		for (var j = 0; j < final_comorb[i].level.length; j++) {
			var levelTermsAndTypes = final_comorb[i].level[j];
			var term = levelTermsAndTypes.term;
			var types = levelTermsAndTypes.types;					
			var mainvalue = ":" + term;					
			var valueStr =  prefix + mainvalue + suffix;
			tableBody += "<br><input class='rrPart" + reportPrefix + "'  type='checkbox' value = '"+valueStr+"'>" + term;					
			var levelBody = "";				
			var marginLeft = 60;
			levelBody = recursiveDescent(types, mainvalue, levelBody, reportPrefix, prefix, suffix, marginLeft);// this method is defined in radiology.js
			tableBody += levelBody;
		}		                                       
        var dateStr = dateArr.join(" by ");
        tableBody += "</div></td><td style='vertical-align:top'>" 
                + "<a id='ecgSentencesImg"+reportPrefix+"' style='visibility: hidden;'>"
                + "<img src='"+button1img+"' alt='Details'/>"
                + "</a></td><td style='vertical-align:top'>"
                + "<div id='ecgSentences"+reportPrefix+"' class='imageBackSingle' style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
                + "<div id='ecgSentences"+reportPrefix+"inner' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
                + "<span style='color: #858384; font-weight: bold;'>Report:</span> "+ecgPDFTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+dateStr+"<br>"
                + "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";                        
        for (var j = 0; j < report_data.length; j++) 
        {                            
            var pos = report_data[j].search(final_comorb[i].search);
            var pos_lower = report_data[j].search(final_comorb[i].search.toLowerCase());
            var pos_upper = report_data[j].search(final_comorb[i].search.toUpperCase());

            var start = -1;
            if (pos != -1) 
            {
                start = pos;
            }
            if (pos_lower != -1) {start = pos_lower;}
            if (pos_upper != -1) {start = pos_upper;}

            if (start != -1) 
            {
                var end = start + final_comorb[i].search.length;
                tableBody += report_data[j].slice(0, start)
                        + "<span class ='highlight' style='background-color:yellow;'>" + report_data[j].slice(start, end) + "</span>"
                        + report_data[j].slice(end);
            }
            else 
            {
                tableBody += report_data[j];
            }
            tableBody += "<br/>"
        }            
		tableBody += "<a href='"+ecgLinks[index]+"' target='_blank'> Link to Report </a>";
        tableBody += "&nbsp;&nbsp;<a href=\"#ecgshow\"><br><button onclick=\"showPDF("+index+",false,'ECG');makeDivHiddenRR('ecgSentences"+reportPrefix+"');\">Show Reports</button></a>";
        tableBody += "</div></div></td></tr></table></td></tr>";
    }	
	return tableBody;
}