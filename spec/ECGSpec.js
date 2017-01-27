it("test ecg for given report data", function() {
      //var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation. Anteroseptal infarct (cited on or before 14-FEB-2011). ST & T wave abnormality, consider inferior ischemia or digitalis effect. Abnormal ECG. When compared with ECG of 01-APR-2015 09:30, T wave inversion now evident in Inferior leads QT has lengthened. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/2/2015 12:33:00 PM. ";
	  var actualReport = "Title : ECG Interpretation. Report Data : Normal sinus rhythm with sinus arrhythmia. Increased R/S ratio in V1, consider early transition or posterior infarct. Borderline ECG. Confirmed by LAWSON, M.D., WILLIAM (1002) on 6/24/2015 12:38:16 PM. ";
	
      var comorb_list_length = testECG(actualReport);
      
      expect(comorb_list_length).toBeGreaterThan(0);
    });