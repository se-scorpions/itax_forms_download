function HTMLtoPDF(){
var pdf = new jsPDF('p', 'pt', 'letter');

source = $('.print')[0];
specialElementHandlers = {
	'#bypassme': function(element, renderer){
		return true
	}
}
margins = {
    top: 50,
    left: 60,
    right: 20,
    width: 550
    
  };
pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	
	,margins.left // x coord
  	, margins.right // y coord
    , {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
       
		pdf.save('I-taxForms.pdf');
      }
  )		
}