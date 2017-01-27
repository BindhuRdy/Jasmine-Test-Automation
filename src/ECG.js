/**
 * New node file
 */

var pdfTitles = [];
var pdfList = [];
var transformedPdfList = [];
var reportData = [];
var array3 = new Array();
var merged_sentences = new Array();

//getActualPDF();

var pdfHtml;
var timeout;
var interval = 0;
var testTable = "";

function testECG(actualReport){
    getActualPDF(actualReport);
    //buildRRheader();
	//buildRRlist();
	var comorb_list = showRRbody();
    return comorb_list.length;
}
function initRR() 
{
	buildRRheader();
	buildRRlist();
	showRRbody();
	return;
}

function getActualPDF(actualReport) {
	//EKG reports testing
	
	
	//atrial fibrillation - 30016206902
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation. Anteroseptal infarct (cited on or before 14-FEB-2011). ST & T wave abnormality, consider inferior ischemia or digitalis effect. Abnormal ECG. When compared with ECG of 01-APR-2015 09:30, T wave inversion now evident in Inferior leads QT has lengthened. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/2/2015 12:33:00 PM. ";
	
	//ventricular tachycardia - 30019913727
	//var actualReport = "Title: ECG Interpretation. Report Data : atrial flutter w/ variable conduction. premature ventricular complexes and non-sustained ventricular tachycardia. Right bundle branch block. Abnormal ECG. When compared with ECG of 18-MAY-2015 23:11, QRS axis Shifted right. Confirmed by BARBERA, M.D., SAVERIO (1138) on 5/21/2015 8:56:26 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Wide QRS tachycardia  most likely sustained ventricular tachycardia. Left axis deviation. Non-specific intra-ventricular conduction block. Inferior infarct , age undetermined. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 3/9/2015 11:42:15 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Poor quality ECG. Ventricular paced rhythm with salvos of ventricular tachycardia. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/1/2015 12:46:39 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Poor quality ECG. Atrial paced / sensed Ventricular paced rhythm with salvos of nonsustained ventricular tachycardia. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/1/2015 12:44:15 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : *** Poor data quality, interpretation may be adversely affected. Sinus rhythm with 1st degree A-V block with frequent salvos of ventricular tachycardia. Inferior infarct. ST & Marked T wave abnormality, consider anterolateral ischemia. Abnormal ECG. When compared with ECG of 17-FEB-2015 07:50, Significant changes have occurred. Confirmed by VLAY, M.D., STEPHEN (1008) on 2/18/2015 10:13:46 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Demand pacemaker; interpretation is based on intrinsic rhythm. Atrial sensed Ventricular paced rhythm with salvos of nonsustained ventricular tachycardia. Abnormal ECG. Serial changes of Lateral infarct Present. Confirmed by VLAY, M.D., STEPHEN (1008) on 5/7/2015 6:20:52 PM. ";
	
	//ventricular fibrillation - 30011057161
	//var actualReport = "Title: ECG Interpretation. Report Data : Ventricular fibrillation. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 5/28/2015 4:03:32 PM. ";
	
	//infarction - 30017436166
    //var actualReport = "Title: ECG Interpretation. Report Data : Atrial paced Ventricular sensed / paced  rhythm with occasional Premature ventricular complexes. Non-specific intra-ventricular conduction delay. Anterior T wave inversion, consider subendocardial infarction. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 1/5/2015 11:21:04 AM. "; 
	//var actualReport = "Title : ECG Interpretation. Report Data : Normal sinus rhythm. Low voltage QRS. Septal infarct (cited on or before 21-JUL-2015). ST & T wave abnormality, consider anterolateral ischemia  or infarction. ST elevation consider inferior injury or acute infarct. Prolonged QT. Abnormal ECG. When compared with ECG of 23-JUL-2015 11:33, Sinus rhythm has replaced Atrial fibrillation. Confirmed by LAWSON, M.D., WILLIAM (1002) on 7/23/2015 7:46:36 PM. ";
	
	//supraventricular tachycardia 
	//var actualReport = "Title: ECG Interpretation. Report Data : Supraventricular tachycardia Possible Atrial flutter with 2 to 1 block. Possible Anterior infarct (cited on or before 01-MAY-2015). ST & T wave abnormality, consider inferolateral ischemia. Prolonged QT. Abnormal ECG. When compared with ECG of 01-MAY-2015 16:29, Serial changes of evolving Anterior infarct Present. Confirmed by LAWSON, M.D., WILLIAM (1002) on 5/3/2015 10:45:04 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Supraventricular tachycardia. Left ventricular hypertrophy with repolarization abnormality. Abnormal ECG. When compared with ECG of 26-NOV-2013 10:36, Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 2/19/2015 10:32:59 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : *** Suspect arm lead reversal, interpretation assumes no reversal. Supraventricular tachycardia. Left ventricular hypertrophy with repolarization abnormality. Lateral infarct , age undetermined. Prolonged QT. Abnormal ECG. Confirmed by LAWSON, M.D., WILLIAM (1002) on 3/30/2015 3:30:28 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Supraventricular tachycardia. Possible Inferior infarct , age undetermined. ST & T wave abnormality, consider inferolateral ischemia. ST elevation in aVR. Abnormal ECG. When compared with ECG of 15-JAN-2015 00:02,. Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 1/15/2015 12:30:14 PM. ";
	
	//atrial fibrillation 
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation with slow ventricular response. Anteroseptal infarct (cited on or before 14-FEB-2011). Abnormal ECG. When compared with ECG of 25-SEP-2014 14:18, Vent. rate has decreased BY  40 BPM. Confirmed by VLAY, M.D., STEPHEN (1008) on 2/9/2015 11:10:33 AM ";
	
	//atrial fibrillation
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation. Poor R wave progression. Cannot rule out Anterior infarct (cited on or before 14-FEB-2011). ST depression in Inferolateral leads consider ischemia. Abnormal ECG. When compared with ECG of 08-FEB-2015 22:15, Vent. rate has increased BY  25 BPM. Confirmed by LAWSON, M.D., WILLIAM (1002) on 3/25/2015 10:41:53 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Atrial fibrillation. Anteroseptal infarct (cited on or before 14-FEB-2011). ST & T wave abnormality, consider inferior ischemia or digitalis effect. Abnormal ECG. When compared with ECG of 01-APR-2015 09:30, T wave inversion now evident in Inferior leads. QT has lengthened. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/2/2015 12:33:00 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Atrial fibrillation with a competing junctional pacemaker with premature ventricular or aberrantly conducted complexes. Left anterior fascicular block. Nonspecific ST and T wave abnormality , probably digitalis effect. Abnormal ECG. When compared with ECG of 15-JUN-2015 15:49, Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 6/16/2015 6:38:08 PM. ";
	
	//no comorbs
	//var actualReport = "Title : ECG Interpretation. Report Data : .Sinus rhythm with 1st degree A-V block. Otherwise normal ECG. When compared with ECG of 18-FEB-2015 09:23, PR interval has increased. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/22/2015 9:07:51 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Normal sinus rhythm with sinus arrhythmia. Increased R/S ratio in V1, consider early transition or posterior infarct. Borderline ECG. Confirmed by LAWSON, M.D., WILLIAM (1002) on 6/24/2015 12:38:16 PM. ";
	
	var startIndex = actualReport.indexOf('Title');
	var endIndex = actualReport.indexOf("Title", startIndex+1);
	while(endIndex != -1) {
		 var temp = endIndex;
		 pdfList.push(actualReport.slice(startIndex, endIndex));
		 endIndex = actualReport.indexOf("Title", endIndex+1);
		 startIndex = temp;
	}
	pdfList.push(actualReport.slice(startIndex, endIndex));
	
	for(var i=0; i<pdfList.length; i++)
		transformedPdfList.push(transform_report(pdfList[i]));

}

function transform_report(data) {
	var keywords = ["Title", "Report Data"];
    var output_data = "Event ";
    var keyword_index = 0;
    var input_data = data.toString();
    
    var pos = -1;
    for (var i=0; i<keywords.length; i++) {
		pos = input_data.indexOf(keywords[i]);
		if (pos == 0) {
			keyword_index = i;
			break;
		}
	}

    while(pos != -1) {
            output_data += keywords[keyword_index] + " : ";
            pos += keywords[keyword_index].length;
            var index = keyword_index;
            keyword_index = find_next_keyword(keywords, keyword_index, input_data, pos);
            var end_pos = input_data.indexOf(keywords[keyword_index]);
            var output_text = input_data.slice(pos, end_pos).replace(/:/, '');
            output_data += output_text.trim() + "\n";
            
            if(keywords[index] === "Title") {
            	pdfTitles.push(output_text.trim());
            }
            
            if (keywords[index] === "Report Data") {
            	reportData.push(output_text.trim());
            }
            pos = end_pos;
    }
    return output_data;
}

function find_next_keyword(keywords, index, input_data, pos) {
    var orig_index = index;
    var min_pos = input_data.length;
    var min_index = index;
    if(index == keywords.length - 1)
            return -1;
    for(var i = 0; i < keywords.length; i++) {
            if (i == orig_index)
                    continue;
            var keyword = keywords[i];
            var next_keyword_pos = input_data.indexOf(keyword, pos);
            if(next_keyword_pos != -1 && next_keyword_pos < min_pos) {
                    min_pos = next_keyword_pos;
                    min_index = i;
            }
    }
    return min_index;
}

function showRRbody() {
	
	var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	
	for(var i=0; i<transformedPdfList.length; i++) {
		var pdfContent = transformedPdfList[i];
		//tableBody = buildRRbody(i, pdfContent, tableBody);
        var final_comorb = buildRRbody(i, pdfContent, tableBody);
       
	}

	tableBody += "<tr><td><br><input id='rrComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='rrCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";
	
	//$('#rrbody').html(tableBody);
	
	//return;
    return final_comorb;
}

function showSelectedPDF() {
	var selectList = document.getElementById("selectList");
	var i = selectList.selectedIndex;
	if (i != 0) {
		showPDF(i-1);
	}
	else {
		hidePDF();
	}
	return;
}

function showPDF(index) {
	var pdfContent = transformedPdfList[index];
	pdfHtml = pdfContent.replace(/\n/g,'<br><br>');
	var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");

	rrshow.style.display = "block";
	pdftable.style.display = 'block';
	pdfframe.style.display = 'block';
	var pdfHtml_sentences = break_sentences(pdfHtml,".");
	var tableBody = '';	
	for(var j=0; j<pdfHtml_sentences.length; j++) 
	{
		var cur_string = pdfHtml_sentences[j];
		console.log("array3 inside showPDF", array3);
		var str = "Supraventricular tachycardia";
		
		if(array3[1] != null)
		{
		if(array3[1].indexOf(str)== -1)
		{
		for(var i=0; i<array3.length; i++)
		{
		var pos = cur_string.search(array3[i][0].trim());
		var pos_lower = cur_string.search(array3[i][0].toLowerCase().trim());
		var pos_upper = cur_string.search(array3[i][0].toUpperCase().trim());
		
		var start = -1;
		if(pos != -1) 
		{
			start = pos;
		}

		if(pos_lower != -1) {start = pos_lower;}
		if(pos_upper != -1) {start = pos_upper;}
		
		if(start != -1) 
		{
			var end = start + array3[i][0].length;
			var merged_string = cur_string.slice(0,start)
					+ "<font style='background-color:yellow;'>" + cur_string.slice(start, end) + "</font>"
					+ cur_string.slice(end);
			cur_string = merged_string;
		}
		}
		}
		else
		{
			for(var i=1; i<array3.length; i++)
			{
			var pos = cur_string.search(array3[i][0].trim());
			var pos_lower = cur_string.search(array3[i][0].toLowerCase().trim());
			var pos_upper = cur_string.search(array3[i][0].toUpperCase().trim());
			
			var start = -1;
			if(pos != -1) 
			{
				start = pos;
			}

			if(pos_lower != -1) {start = pos_lower;}
			if(pos_upper != -1) {start = pos_upper;}
			
			if(start != -1) 
			{
				var end = start + array3[i][0].length;
				var merged_string = cur_string.slice(0,start)
						+ "<font style='background-color:yellow;'>" + cur_string.slice(start, end) + "</font>"
						+ cur_string.slice(end);
				cur_string = merged_string;
			}
			}
		}
		}
		else
		{
			for(var i=0; i<array3.length; i++)
			{
			var pos = cur_string.search(array3[i][0].trim());
			var pos_lower = cur_string.search(array3[i][0].toLowerCase().trim());
			var pos_upper = cur_string.search(array3[i][0].toUpperCase().trim());
			
			var start = -1;
			if(pos != -1) 
			{
				start = pos;
			}

			if(pos_lower != -1) {start = pos_lower;}
			if(pos_upper != -1) {start = pos_upper;}
			
			if(start != -1) 
			{
				var end = start + array3[i][0].length;
				var merged_string = cur_string.slice(0,start)
						+ "<font style='background-color:yellow;'>" + cur_string.slice(start, end) + "</font>"
						+ cur_string.slice(end);
				cur_string = merged_string;
			}
			}
		}
		tableBody += cur_string+".";
	}
	pdfframe.innerHTML = tableBody;
	return;
}
		
function hidePDF() {
	var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");
	rrshow.style.display = "none";
	pdftable.style.display = 'none';
	pdfframe.style.display = 'none';
	return;
}

function buildRRheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"wrap\");'>CoMorbidities from EKG Report&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#rrheader').html(tableBody);	
	return;
}

function getPdfDate(pdf)
{
	var sentences = new Array();
	sentences=break_sentences(pdf,"\n");
	var title_date = "Confirmed by";
    var pdf_date = "";
	
	for(i=0; i<sentences.length; i++) {
		if(sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			var pos = sentences[i].indexOf(title_date);
			pdf_date = sentences[i].split("Confirmed by")[1];
			break;
		}
	}
	return pdf_date;
}

function makeDivVisibleRR(divId){
	clearTimeout(timeout);
	document.getElementById(divId).style.display = "block";
	return;
}

function makeDivHiddenRR(divId){
	timeout = setTimeout(function(){ document.getElementById(divId).style.display = "none" }, interval);
	return;
}

function buildRRlist() {
	var tableBody = "<select id='selectList' onChange=\"showSelectedPDF();\">";
	if (pdfTitles.length != 0) {
		tableBody += "<br><br><option value='first option'>Select the report to show</option>";
		for (var i=0; i<pdfTitles.length; i++) {
			tableBody += "<option value='"+pdfTitles[i]+"'>"+pdfTitles[i]+" ("+getPdfDate(transformedPdfList[i])+")</option>";
		}
	}
	else {
		tableBody += "<option value='firstOption'>No report</option>";
	}
	tableBody += "</select>";
	tableBody += "\t<a href=\"#rrshow\"></a>";
	$('#rrlist').html(tableBody);	
	return;
}

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}


function isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}

function buildRRbody(index, contents, tableBody) {
	var comorb_array = new Array();
	comorb_array =func_category(index); 
	
	if(comorb_array != null) {
		var report_data = new Array();
		report_data = break_sentences(reportData[index],"\n");
		
		var negPhrases = new Array();
		negPhrases=negPhrases_processing();
		var negPhrases_two_d = new Array();
		negPhrases_two_d = negPhrases_two_d_processing(negPhrases);
		var conjunctions = new Array();
		conjunctions=conjunctions_processing();
		var conjunctions_two_d = new Array();
		conjunctions_two_d=negPhrases_two_d_processing(conjunctions);

		final_comorb=determine_final_comorb(report_data,comorb_array);
		array3 = final_comorb;
		
		var final_sentences = new Array();
		final_sentences = check_comorb_in_sentences(report_data,final_comorb,negPhrases_two_d,conjunctions_two_d);
	
		var temp_comorb = new Array();
		temp_comorb=determine_final_comorb(final_sentences,final_comorb);

		final_comorb = temp_comorb;

		var str = "Supraventricular tachycardia";
		console.log("BEFORE", final_comorb[0], "1",final_comorb[1]);
		if(final_comorb[1] != null)
		{
		if((final_comorb[1].indexOf(str) == -1))
			{
			/*{
				console.log("NOT PRESENT");
				var final_comorb1 = [];
				final_comorb1.push(final_comorb[1]);
				final_comorb = final_comorb1;
				console.log("AFTER ALL", final_comorb);
			}*/
		console.log("NOT FOUND");
		var impression_prefix = 0;
		var findings_prefix = 1;
		
		if(final_comorb != null && final_comorb.length != 0) {
			for(var i=0; i<final_comorb.length; i++) {
				tableBody += "<tr><td><table>"
						  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\">"
						  + "<td><div id='rrSentencesCol"+index+impression_prefix+i+"'>"
						  + "<a onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\">"
						  + "<b><font color='#0000FF'><input class='rrPart' id='rrGroup"+index+impression_prefix+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+index+impression_prefix+i+"\",\"rrGroup"+index+impression_prefix+i+"\");'>"+final_comorb[i][1]
						  + "</font></b></a></div>";
				
				tableBody += "<div id='rrChkGrp"+index+impression_prefix+i+"' style='display: none; margin-left: 60px;'>";
				
				for(var j=2; j<final_comorb[i].length; j++) {
					for(var k=0;k<final_comorb[i][j].length;k++){
					tableBody += "<br><input class='rrPart"+index+impression_prefix+i+"' id='rrGrp"+index+impression_prefix+i+"Chk"+j+"' type='checkbox'>"+final_comorb[i][j][k];
					}
				}

				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+index+impression_prefix+i+"' onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\" style='visibility: hidden;'>"
						//+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						//+ "<div id='rrSentences"+index+impression_prefix+i+"' class='imageBackSingle' onmouseover=\"makeDivVisible('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+index+impression_prefix+i+"');\" style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
						+ "<div id='rrSentences"+index+impression_prefix+i+"' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
						+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)+"<br>"
						+ "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";
				
				for(var j=0; j<report_data.length; j++) 
				{
					
					var pos = report_data[j].search(final_comorb[i][0].trim());
					var pos_lower = report_data[j].search(final_comorb[i][0].toLowerCase().trim());
					var pos_upper = report_data[j].search(final_comorb[i][0].toUpperCase().trim());
					
					var start = -1;
					if(pos != -1) 
					{
						start = pos;
					}
					if(pos_lower != -1) {start = pos_lower;}
					if(pos_upper != -1) {start = pos_upper;}
					
					if(start != -1) 
					{
						var end = start + final_comorb[i][0].length;
						tableBody += report_data[j].slice(0,start)
								+ "<font id='font1' style='background-color:yellow;'>" + report_data[j].slice(start, end) + "</font>"
								+ report_data[j].slice(end);
					}
					else 
					{
						tableBody += report_data[j];
					}
				}
				tableBody += "<br><a href=\"#rrshow\"><br><button onclick=\"showPDF("+index+");\">Show Reports</button></a>";
				tableBody += "</div></div></td></tr></table></td></tr>";
			}
		}
			}
		else
		{
			console.log("FOUND");
			var final_comorb1 = [];
			final_comorb1.push(final_comorb[1]);
			final_comorb = final_comorb1;
			console.log("AFTER ALL", final_comorb);
			var impression_prefix = 0;
			var findings_prefix = 1;
			
			if(final_comorb != null && final_comorb.length != 0) {
				for(var i=0; i<final_comorb.length; i++) {
					tableBody += "<tr><td><table>"
							  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\">"
							  + "<td><div id='rrSentencesCol"+index+impression_prefix+i+"'>"
							  + "<a onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\">"
							  + "<b><font color='#0000FF'><input class='rrPart' id='rrGroup"+index+impression_prefix+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+index+impression_prefix+i+"\",\"rrGroup"+index+impression_prefix+i+"\");'>"+final_comorb[i][1]
							  + "</font></b></a></div>";
					
					tableBody += "<div id='rrChkGrp"+index+impression_prefix+i+"' style='display: none; margin-left: 60px;'>";
					
					for(var j=2; j<final_comorb[i].length; j++) {
						for(var k=0;k<final_comorb[i][j].length;k++){
						tableBody += "<br><input class='rrPart"+index+impression_prefix+i+"' id='rrGrp"+index+impression_prefix+i+"Chk"+j+"' type='checkbox'>"+final_comorb[i][j][k];
						}
					}

					tableBody += "</div></td><td style='vertical-align:top'>" 
							+ "<a id='rrSentencesImg"+index+impression_prefix+i+"' onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\" style='visibility: hidden;'>"
							//+ "<img src='"+button1img+"' alt='Details'/>"
							+ "</a></td><td style='vertical-align:top'>"
							//+ "<div id='rrSentences"+index+impression_prefix+i+"' class='imageBackSingle' onmouseover=\"makeDivVisible('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+index+impression_prefix+i+"');\" style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
							+ "<div id='rrSentences"+index+impression_prefix+i+"' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
							+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)+"<br>"
							+ "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";
					
					for(var j=0; j<report_data.length; j++) 
					{
						
						var pos = report_data[j].search(final_comorb[i][0].trim());
						var pos_lower = report_data[j].search(final_comorb[i][0].toLowerCase().trim());
						var pos_upper = report_data[j].search(final_comorb[i][0].toUpperCase().trim());
						
						var start = -1;
						if(pos != -1) 
						{
							start = pos;
						}
						if(pos_lower != -1) {start = pos_lower;}
						if(pos_upper != -1) {start = pos_upper;}
						
						if(start != -1) 
						{
							var end = start + final_comorb[i][0].length;
							tableBody += report_data[j].slice(0,start)
									+ "<font id='font1' style='background-color:yellow;'>" + report_data[j].slice(start, end) + "</font>"
									+ report_data[j].slice(end);
						}
						else 
						{
							tableBody += report_data[j];
						}
					}
					tableBody += "<br><a href=\"#rrshow\"><br><button onclick=\"showPDF("+index+");\">Show Reports</button></a>";
					tableBody += "</div></div></td></tr></table></td></tr>";
				}
			}
			
		}
		}
		else
		{
			var impression_prefix = 0;
			var findings_prefix = 1;
			
			if(final_comorb != null && final_comorb.length != 0) {
				for(var i=0; i<final_comorb.length; i++) {
					tableBody += "<tr><td><table>"
							  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\">"
							  + "<td><div id='rrSentencesCol"+index+impression_prefix+i+"'>"
							  + "<a onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\">"
							  + "<b><font color='#0000FF'><input class='rrPart' id='rrGroup"+index+impression_prefix+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+index+impression_prefix+i+"\",\"rrGroup"+index+impression_prefix+i+"\");'>"+final_comorb[i][1]
							  + "</font></b></a></div>";
					
					tableBody += "<div id='rrChkGrp"+index+impression_prefix+i+"' style='display: none; margin-left: 60px;'>";
					
					for(var j=2; j<final_comorb[i].length; j++) {
						for(var k=0;k<final_comorb[i][j].length;k++){
						tableBody += "<br><input class='rrPart"+index+impression_prefix+i+"' id='rrGrp"+index+impression_prefix+i+"Chk"+j+"' type='checkbox'>"+final_comorb[i][j][k];
						}
					}

					tableBody += "</div></td><td style='vertical-align:top'>" 
							+ "<a id='rrSentencesImg"+index+impression_prefix+i+"' onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\" style='visibility: hidden;'>"
							//+ "<img src='"+button1img+"' alt='Details'/>"
							+ "</a></td><td style='vertical-align:top'>"
							//+ "<div id='rrSentences"+index+impression_prefix+i+"' class='imageBackSingle' onmouseover=\"makeDivVisible('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+index+impression_prefix+i+"');\" style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
							+ "<div id='rrSentences"+index+impression_prefix+i+"' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
							+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)+"<br>"
							+ "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";
					
					for(var j=0; j<report_data.length; j++) 
					{
						
						var pos = report_data[j].search(final_comorb[i][0].trim());
						var pos_lower = report_data[j].search(final_comorb[i][0].toLowerCase().trim());
						var pos_upper = report_data[j].search(final_comorb[i][0].toUpperCase().trim());
						
						var start = -1;
						if(pos != -1) 
						{
							start = pos;
						}
						if(pos_lower != -1) {start = pos_lower;}
						if(pos_upper != -1) {start = pos_upper;}
						
						if(start != -1) 
						{
							var end = start + final_comorb[i][0].length;
							tableBody += report_data[j].slice(0,start)
									+ "<font id='font1' style='background-color:yellow;'>" + report_data[j].slice(start, end) + "</font>"
									+ report_data[j].slice(end);
						}
						else 
						{
							tableBody += report_data[j];
						}
					}
					tableBody += "<br><a href=\"#rrshow\"><br><button onclick=\"showPDF("+index+");\">Show Reports</button></a>";
					tableBody += "</div></div></td></tr></table></td></tr>";
				}
			}
		}
			
	
	}
	//return tableBody;
    return final_comorb;
}

function func_category(index){
	
	var category = pdfTitles[index];
	var chest = "Chest";
	var head = "Head";
	var brain = "Brain";
	var abdomen = "Abdomen";
	var abd = "Abd";
	var ekg = "ECG";
	
	var str_terms_comorbidities = "";
	var two_d_array = new Array();
	if ((category.search(chest)!=-1) || (category.search(chest.toLowerCase()) != -1) || (category.search(chest.toUpperCase()) != -1)){
		str_terms_comorbidities = "effusion : Pleural effusion ; Exudative , Transudative , Inflammatory effusion , Malignant effusion\nPneumonia : Pneumonia ; Aspiration , Bacterial , Viral , suspected gram negative\nBronchiectasis : Bronchiectasis ; with acute exacerbation , with lower respiratory infection , with pneumonia\nBronchitis : Acute Bronchitis\nobstructive : obstructive airway disease ; Chronic , with acute lower respiratory infection , with acute exacerbation\nedema : Pulmonary edema ; Acute , Chronic\nARDS : ARDS\nAtelectasis : Atelectasis";
		two_d_array=split_terms_and_comorbidities(str_terms_comorbidities);
		return two_d_array;
	}
	else if ((category.search(head)!=-1) || (category.search(head.toLowerCase()) != -1) || (category.search(head.toUpperCase()) != -1) || (category.search(brain)!=-1) || (category.search(brain.toLowerCase()) != -1) || (category.search(brain.toUpperCase()) != -1) ){
		str_terms_comorbidities = "Mass Effect : Cerebral compression\nMidline Shift : Cerebral compression\nLoss of distinction between the gray and white matter : Cerebral infarction ; Acute infarction , Chronic infarction\nCompression : Cerebral compression\nVasogenic edema : Cerebral edema ; Cerebral edema with compression\nHydrocephalus : Hydrocephalus ; Normal Pressure Hydrocephalus , Obstructive hydrocephalus\nSubarachnoid hemorrhage : Subarachnoid hemorrhage ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nSubdural Hematoma : Subdural Hematoma ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nEpidural hematoma : Epidural hematoma ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nCerebral hemorrhage : Cerebral hemorrhage ; Acute , Chronic , Acute on Chronic\nIntraventricular hemorrhage : Intraventricular hemorrhage ; Acute , Chronic , Acute on Chronic\nAneurysm : Cerebral Aneursym ; Non Ruptured , Ruptured\nTumor : Brain Tumor ; With compression , With hemorrhage\nHerniation : Brain herniation ; with cerebral compression , With cerebral edema\nSinusitis : Sinusitis ; Chronic Sinusitis , Acute Sinusitis , Acute on Chronic\n Infarction : Cerebral infarction ; Acute infarction , Chronic infarction\nAbscess : Cerebral Abscess\nNeoplasm : Cerebral Neoplasm ; With compression , With Hemorrhage";
		two_d_array = split_terms_and_comorbidities(str_terms_comorbidities);
		return two_d_array;
	}
	else if ((category.search(abdomen)!=-1) || (category.search(abdomen.toLowerCase()) != -1) || (category.search(abdomen.toUpperCase()) != -1) || (category.search(abd)!=-1) || (category.search(abd.toLowerCase()) != -1) || (category.search(abd.toUpperCase()) != -1)){
		str_terms_comorbidities = "Biliary Dilation : Obstruction, Stricture, Stones, Cholangitis, Neoplasm, Pancreatitis\nThickening of colon : Colitis, diverticulitis, carcinoma, ischemia\npericolonic stranding : Colitis, diverticulitis, carcinoma, ischemia\nCholelithiasis : Acute Cholecystitis\nstones : Acute Cholecystitis\nGallbladder wall thickening : Acute Cholecystitis\npericholecystic fluid : Acute Cholecystitis\nEnlarged Pancreas : Acute Pancreatitis\nPeripancreatic fluid collections : Acute Pancreatitis\npancreatic psuedocysts : Acute Pancreatitis\nDilated Appendix : Acute Appendicitis\nperiappendix stranding : Acute Appendicitis\nHydronephrosis : Renal Stone\nperinephric stranding : Renal Stone\nrim sign : Renal Stone\nDisrupted splenic capsule : Splenic Laceration\nlack of splenic margin : Splenic Laceration\nhypodensity : Splenic Laceration\nhemoperitoneum : Splenic Laceration\ncontrast blush : Splenic Laceration\nextravasation : Liver Laceration\nSplenic Laceration : Liver Laceration\nPerihepatic fluid : Liver Laceration\nFragmented Lobe : Liver Laceration\ncapsular tear : Liver Laceration\nparenchymal disruption : Liver Laceration\nLinear hypodensity of pancreas : Pancreatic laceration\nRetropancreatic fluid : Pancreatic laceration\nRetroperitoneal fluid : Source of bleeding\nhematoma : Source of bleeding\nRetroperitoneal extravasation of contrast : Renal Contusion, Laceration, Shattered Kidney,  laceration of renal pelvis\nAdrenal hematoma : Renal Contusion, Laceration, Shattered Kidney, laceration of renal pelvis\nMesenteric laceration : Bowel perforation, Ischemic Bowel\nhemoperitoneum : Bowel perforation, Ischemic Bowel\nExtraluminal Air : Bowel perforation\nFree Air : Bowel perforation\nPneumoperitoneum : Bowel perforation\nextravasation of contrast : Bowel perforation\ndiscontinuos bowel wall : Bowel perforation\nExtravasation of urine : Bladder Rupture\nObstructive Gas Pattern : Ileus, Volvulus, Small bowel Obstruction, Large Bowel Obstruction\nDilated Loops of bowel : Small Bowel Obstruction, Ileus\nSentinel Loop : Pancreatitis, Ileus\nDilation of colon : Large Bowel Obstruction, volvulus, Toxic megacolon\nFluid levels : Ileus\naccumulation : Ileus\nFree Gas : Bowel Perforation\nPancreatitis: Pancreatitis ; Chronic , Acute\nPancreatic cyst : Pancreatic cyst/pseudocyst\nObstruction : Intestinal Obstruction, Bile Duct Obstruction ; Intestinal Obstruction with Ileus , Intussusception , Volvulus, with Cholelithiasis \nCholecystitis : Cholecystitis ; Chronic, Acute , Acute on Chronic\nGastritis : Gastritis ; Acute, Chronic\nPeritonitis : Peritonitis\nEnteritis : Acute ; Due to C.diff, Due to E.coli, Bacterial\n";
		two_d_array = split_terms_and_comorbidities(str_terms_comorbidities);
		return two_d_array;
	}
	else if ((category.search(ekg)!=-1) || (category.search(ekg.toLowerCase()) != -1) || (category.search(ekg.toUpperCase()) != -1))
	{
		str_terms_comorbidities = "Ventricular Tachycardia : Ventricular tachycardia\nVentricular fibrillation : Ventricular fibrillation\nSupraventricular tachycardia : Supraventricular tachycardia\nAtrial fibrillation : Atrial fibrillation ; paroxysmal , persistant , permanent\nAtrial flutter : Atrial flutter\n1st degree A-V block : 1st degree A-V block\nInfarct  : Infarct  ; Old Myocardial Infarction , Acute Myocardial Infarction\nInfarction : Infarction ; Old Myocardial Infarction , Acute Myocardial Infarction\n";
		two_d_array = split_terms_and_comorbidities(str_terms_comorbidities);
		return two_d_array;
	}
	else
	{
		two_d_array = null;
		return two_d_array;
	}
}

function break_sentences(data,delimiter_string){
	var file_content = data;
	var textfile_sentences = new Array();
	while (file_content.length != 0){
			var pos_newline = file_content.indexOf(delimiter_string);
			if (pos_newline == -1){
				textfile_sentences.push(file_content.slice(0,file_content.length));
				break;
			}
			else if(pos_newline == 0){
				file_content = file_content.slice(1,file_content.length);
			}
			else{
				textfile_sentences.push(file_content.slice(0,pos_newline));
				file_content = file_content.slice(pos_newline+1,file_content.length);
			}
	}
	return textfile_sentences;
}

function split_terms_and_comorbidities(str_terms_comorbidities) {
	var str_term_and_comorbs_delimiter = " : ";
	var str_diff_level_comorbs_delimiter = " ; ";
	var str_same_level_comorbs_delimiter = " , ";
	var result_array = new Array();
	var temp_array = break_sentences(str_terms_comorbidities, "\n");
	
	var str_term_comorbidities = "";
	for(var i = 0; i < temp_array.length; i++) {
		var result = new Array();
		
		var term_and_comorbs = temp_array[i].split(str_term_and_comorbs_delimiter);
		
		result.push(term_and_comorbs[0]);
		var diff_level_comorbs = term_and_comorbs[1].split(str_diff_level_comorbs_delimiter)
		for(var j = 0; j<diff_level_comorbs.length; j++) {
			var result_per_level = new Array();
			var same_level_comorbs = diff_level_comorbs[j].split(str_same_level_comorbs_delimiter);
			for(var k = 0; k<same_level_comorbs.length; k++)
				result_per_level.push(same_level_comorbs[k]);
			result.push(result_per_level);
		}
		result_array.push(result);
	}
	
	return result_array;
}

function negPhrases_processing(){
	var negPhrases = new Array();
	negPhrases.push("absence of");
	negPhrases.push("cannot see");
	negPhrases.push("cannot");
	negPhrases.push("checked for");
	negPhrases.push("declined");
	negPhrases.push("declines");
	negPhrases.push("denied");
	negPhrases.push("denies");
	negPhrases.push("denying");
	negPhrases.push("evaluate for");
	negPhrases.push("fails to reveal");  
	negPhrases.push("free of");
	negPhrases.push("negative for");
	negPhrases.push("never developed");
	negPhrases.push("never had");
	negPhrases.push("no");  
	negPhrases.push("no abnormal");
	negPhrases.push("no cause of");
	negPhrases.push("no complaints of");
	negPhrases.push("no evidence");
	negPhrases.push("no new evidence");
	negPhrases.push("no other evidence");
	negPhrases.push("no evidence to suggest");
	negPhrases.push("no findings of");
	negPhrases.push("no findings to indicate");
	negPhrases.push("no mammographic evidence of");
	negPhrases.push("no new");
	negPhrases.push("no radiographic evidence of");
	negPhrases.push("no sign of");
	negPhrases.push("no significant");  
	negPhrases.push("no signs of"); 
	negPhrases.push("no suggestion of");
	negPhrases.push("no suspicious");
	negPhrases.push("not");  
	negPhrases.push("not appear");
	negPhrases.push("not appreciate");
	negPhrases.push("not associated with");
	negPhrases.push("not complain of");
	negPhrases.push("not demonstrate");
	negPhrases.push("not exhibit");
	negPhrases.push("not feel");
	negPhrases.push("not had");
	negPhrases.push("not have");
	negPhrases.push("not know of");
	negPhrases.push("not known to have");
	negPhrases.push("not reveal");
	negPhrases.push("not see");
	negPhrases.push("not to be");
	negPhrases.push("patient was not");
	negPhrases.push("rather than");
	negPhrases.push("resolved");
	negPhrases.push("test for");
	negPhrases.push("to exclude");
	negPhrases.push("unremarkable for");
	negPhrases.push("with no");
	negPhrases.push("without any evidence of");
	negPhrases.push("without evidence");
	negPhrases.push("without indication of");
	negPhrases.push("without sign of");
	negPhrases.push("without");
	negPhrases.push("rule out for");
	negPhrases.push("rule him out for");
	negPhrases.push("rule her out for");
	negPhrases.push("rule the patient out for");
	negPhrases.push("rule him out");
	negPhrases.push("rule her out");
	negPhrases.push("rule out");
	negPhrases.push("r/o");
	negPhrases.push("ro");
	negPhrases.push("rule the patient out");
	negPhrases.push("rules out");
	negPhrases.push("rules him out");
	negPhrases.push("rules her out");
	negPhrases.push("ruled the patient out for");
	negPhrases.push("rules the patient out");
	negPhrases.push("ruled him out against");
	negPhrases.push("ruled her out against");
	negPhrases.push("ruled him out");
	negPhrases.push("ruled her out");
	negPhrases.push("ruled out against");
	negPhrases.push("ruled the patient out against");
	negPhrases.push("did rule out for");
	negPhrases.push("did rule out against");
	negPhrases.push("did rule out");
	negPhrases.push("did rule him out for");
	negPhrases.push("did rule him out against");
	negPhrases.push("did rule him out");
	negPhrases.push("did rule her out for");
	negPhrases.push("did rule her out against");
	negPhrases.push("did rule her out");
	negPhrases.push("did rule the patient out against");
	negPhrases.push("did rule the patient out for");
	negPhrases.push("did rule the patient out");
	negPhrases.push("can rule out for");
	negPhrases.push("can rule out against");
	negPhrases.push("can rule out");
	negPhrases.push("can rule him out for");
	negPhrases.push("can rule him out against");
	negPhrases.push("can rule him out");
	negPhrases.push("can rule her out for");
	negPhrases.push("can rule her out against");
	negPhrases.push("can rule her out");
	negPhrases.push("can rule the patient out for");
	negPhrases.push("can rule the patient out against");
	negPhrases.push("can rule the patient out");
	negPhrases.push("adequate to rule out for");
	negPhrases.push("adequate to rule out");
	negPhrases.push("adequate to rule him out for");
	negPhrases.push("adequate to rule him out");
	negPhrases.push("adequate to rule her out for");
	negPhrases.push("adequate to rule her out");
	negPhrases.push("adequate to rule the patient out for");
	negPhrases.push("adequate to rule the patient out against");
	negPhrases.push("adequate to rule the patient out");
	negPhrases.push("sufficient to rule out for");
	negPhrases.push("sufficient to rule out against");
	negPhrases.push("sufficient to rule out");
	negPhrases.push("sufficient to rule him out for");
	negPhrases.push("sufficient to rule him out against");
	negPhrases.push("sufficient to rule him out");
	negPhrases.push("sufficient to rule her out for");
	negPhrases.push("sufficient to rule her out against");
	negPhrases.push("sufficient to rule her out");
	negPhrases.push("sufficient to rule the patient out for");
	negPhrases.push("sufficient to rule the patient out against");
	negPhrases.push("sufficient to rule the patient out");
    negPhrases.push("what must be ruled out is");
    negPhrases.push("should be ruled out for");
	negPhrases.push("ought to be ruled out for");
    negPhrases.push("may be ruled out for");
	negPhrases.push("might be ruled out for");
	negPhrases.push("could be ruled out for");
	negPhrases.push("will be ruled out for");
	negPhrases.push("can be ruled out for");
	negPhrases.push("must be ruled out for");
	negPhrases.push("is to be ruled out for");
	negPhrases.push("be ruled out for");
	negPhrases.push("unlikely");
	negPhrases.push("free");
	negPhrases.push("was ruled out");
	negPhrases.push("is ruled out");
	negPhrases.push("are ruled out");
	negPhrases.push("have been ruled out");
	negPhrases.push("has been ruled out");
	negPhrases.push("being ruled out");  
	negPhrases.push("should be ruled out");
	negPhrases.push("ought to be ruled out");
	negPhrases.push("may be ruled out");
	negPhrases.push("might be ruled out");
	negPhrases.push("could be ruled out");
	negPhrases.push("will be ruled out");
	negPhrases.push("can be ruled out");
	negPhrases.push("must be ruled out");
	negPhrases.push("is to be ruled out");
	negPhrases.push("be ruled out");
	
	return negPhrases;

}

function conjunctions_processing(){
	var conjunctions = new Array();
	conjunctions.push("but");
	conjunctions.push("however");
	conjunctions.push("nevertheless");
	conjunctions.push("yet");
	conjunctions.push("though");
	conjunctions.push("although");
	conjunctions.push("still");
	conjunctions.push("aside from");
	conjunctions.push("except");
	conjunctions.push("apart from");
	conjunctions.push("secondary to");
	conjunctions.push("as the cause of");
	conjunctions.push("as the source of");
	conjunctions.push("as the reason of");
	conjunctions.push("as the etiology of");
	conjunctions.push("as the origin of");
	conjunctions.push("as the cause for");
	conjunctions.push("as the source for");
	conjunctions.push("as the reason for");
	conjunctions.push("as the etiology for");
	conjunctions.push("as the origin for");
	conjunctions.push("as the secondary cause of");
	conjunctions.push("as the secondary source of");
	conjunctions.push("as the secondary reason of");
	conjunctions.push("as the secondary etiology of");
	conjunctions.push("as the secondary origin of");
	conjunctions.push("as the secondary cause for");
	conjunctions.push("as the secondary source for");
	conjunctions.push("as the secondary reason for");
	conjunctions.push("as the secondary etiology for");
	conjunctions.push("as the secondary origin for");
	conjunctions.push("as a cause of");
	conjunctions.push("as a source of");
	conjunctions.push("as a reason of");
	conjunctions.push("as a etiology of");
	conjunctions.push("as a cause for");
	conjunctions.push("as a source for");
	conjunctions.push("as a reason for");
	conjunctions.push("as a etiology for");
	conjunctions.push("as a secondary cause of");
	conjunctions.push("as a secondary source of");
	conjunctions.push("as a secondary reason of");
	conjunctions.push("as a secondary etiology of");
	conjunctions.push("as a secondary origin of");
	conjunctions.push("as a secondary cause for");
	conjunctions.push("as a secondary source for");
	conjunctions.push("as a secondary reason for");
	conjunctions.push("as a secondary etiology for");
	conjunctions.push("as a secondary origin for");
	conjunctions.push("cause of");
	conjunctions.push("cause for");
	conjunctions.push("causes of");
	conjunctions.push("causes for");
	conjunctions.push("source of");
	conjunctions.push("source for");
	conjunctions.push("sources of");
	conjunctions.push("sources for");
	conjunctions.push("reason of");
	conjunctions.push("reason for");
	conjunctions.push("reasons of");
	conjunctions.push("reasons for");
	conjunctions.push("etiology of");
	conjunctions.push("etiology for");
	conjunctions.push("trigger event for");
	conjunctions.push("origin of");
	conjunctions.push("origin for");
	conjunctions.push("origins of");
	conjunctions.push("origins for");
	conjunctions.push("other possibilities of");
    conjunctions.push("Cannot rule out");
	
	return conjunctions;
}

function negPhrases_two_d_processing(negPhrases){
	var negPhrases_two_d = new Array();
	var i=0;
	for (i=0;i<negPhrases.length;i++){
		var temp_array = new Array();
		temp_array=break_sentences(negPhrases[i]," ");
		negPhrases_two_d.push(temp_array);
	}
	return negPhrases_two_d;
}

function determine_final_comorb(impression_sentences,comorb_array){
	var i=0,j=0,k=0;
	var final_comorb = new Array();
	for(i=0;i<comorb_array.length;i++){
		var temp_array = new Array();
		temp_array = break_sentences(comorb_array[i][0]," ");
		for(j=0;j<impression_sentences.length;j++){
			var comorb_parts_present = 0;
			for(k=0;k<temp_array.length;k++){
				if((impression_sentences[j].search(comorb_array[i][0]) !== -1) || (impression_sentences[j].search(comorb_array[i][0].toLowerCase()) !== -1) || (impression_sentences[j].search(comorb_array[i][0].toUpperCase()) !== -1)){
				//if((impression_sentences[j]=== temp_array[k])||(impression_sentences[j]=== (temp_array[k].toLowerCase()))||(impression_sentences[j]=== (temp_array[k].toUpperCase()))){ 
					comorb_parts_present = 1;
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present == 1){
				final_comorb.push(comorb_array[i]);
				break;
			}
		}
	}
	return final_comorb;
}

function check_comorb_in_sentences(impression_sentences,final_comorb,negPhrases_two_d,conjunctions_two_d){
	var i=0,j=0,k=0;
	var final_sentences = new Array();
	var temp_sentences = new Array();
	for(i=0;i<impression_sentences.length;i++){
		for(j=0;j<final_comorb.length;j++){
			var temp_array = new Array();
			temp_array = break_sentences(final_comorb[j][0]," ");
			var comorb_parts_present = 0;
			for(k=0;k<temp_array.length;k++){
				if((impression_sentences[i].search(temp_array[k]) != -1) || (impression_sentences[i].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[i].search(temp_array[k].toUpperCase()) != -1)){
					comorb_parts_present = 1;
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present ==1){
				temp_sentences.push(impression_sentences[i]);
				break;
			}
		}
	}	
	var neg_phrase_present;
	var  conj_present;
	
	for(i=0;i<temp_sentences.length;i++){
		for(j=0;j<negPhrases_two_d.length;j++){
			neg_phrase_present = 1;
			for(k=0;k<negPhrases_two_d[j].length;k++){
				if(!isAWordMatch(temp_sentences[i], negPhrases_two_d[j][k])) {
					neg_phrase_present = 0;
					break;
				}
			}
			if(neg_phrase_present == 1)
				break;
		}
		if (neg_phrase_present == 1){
			for(j=0;j<conjunctions_two_d.length;j++){
				conj_present = 1;
				for(k=0;k<conjunctions_two_d[j].length;k++){
					if(!isAWordMatch(temp_sentences[i], conjunctions_two_d[j][k])) {
						conj_present = 0;
						break;
					}
				}
				if (conj_present == 1){
					break;
				}
			}
			if(conj_present == 1){
				final_sentences.push(temp_sentences[i]);
			}
		}
		else{
			final_sentences.push(temp_sentences[i]);
		}
	}
	return final_sentences;
}

function isAWordMatch(searchOnString, searchText) {
	  searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	  return new RegExp("\\b"+searchText+"\\b", "i").test(searchOnString);
}