$(document).ready(function(){



	function statutoryIncome(){
		var employ_income = $("#emp_income").val();
		var trade_profit = $("#trade_profit").val();
		var annual_value = $("#ann_value").val();
		var dividend = $("#dividend").val();
		var interest = $("#interest").val();
		var annuities_loyalities = $("#annui_loyali").val();
		var other_income = $("#oth_income").val();
		
		var totalStatutoryIncome = parseInt(employ_income) + parseInt(trade_profit) + parseInt(annual_value) + parseInt(dividend) + parseInt(interest) + parseInt(annuities_loyalities) + parseInt(other_income);
		return totalStatutoryIncome;
	}
	
	function taxableIncome(){
		var losses = $("#losses").val();
		var int_annui = $("#int_annui").val();
		var quli_payments = $("#quli_payments").val();
		
		var temp1 = parseInt(quli_payments) + 500000;
		var temp2 = statutoryIncome() - (parseInt(losses) + parseInt(int_annui));
		
		var temp3 = temp2 - temp1;
		return temp3;	
	}

	function taxPayable(){
		var tax_credits = $("#tax_credits").val();
		var bal_tax = $("#bal_tax").val();
		
		var tax_payable = parseInt(bal_tax) - parseInt(tax_credits);
		return tax_payable;	
	}



    $("#incomebtn1").click(function(){
    	
    	$("#tot_income").val(statutoryIncome());
        
    });

    $("#incomebtn2").click(function(){
    	$("#tax_income").val(taxableIncome());
    });

    $("#incomebtn3").click(function(){
    	$("#tax_payable").val(taxPayable());
    });  
});




function IndexVerification(){
	AssetVerification();
	IncomeVerification();
  var fulln = document.getElementById("fname").value;
  var oAdd = document.getElementById("off_addres").value;
  var rAdd = document.getElementById("res_addres").value;
  var nic = document.getElementById("nic").value;
  var tel = document.getElementById("tele").value;
  var date = document.getElementById("date").value;
  var tin = document.getElementById("tin").value;


  document.getElementById("demo1").innerHTML = "<h1>Personal Information</h1><br><br>";
  document.getElementById("demo2").innerHTML = fulln;
  document.getElementById("demo3").innerHTML = oAdd;
  document.getElementById("demo4").innerHTML = rAdd; 
  document.getElementById("demo5").innerHTML = nic;
  document.getElementById("demo6").innerHTML = tel;
  document.getElementById("demo7").innerHTML = date;
  document.getElementById("demo8").innerHTML = tin;
  document.getElementById("demo2.1").innerHTML = "<b>1) Full Name:</b>";
  document.getElementById("demo3.1").innerHTML = "<b>2) Official Address:</b>";
  document.getElementById("demo4.1").innerHTML = "<b>3) Residential Address:</b>"; 
  document.getElementById("demo5.1").innerHTML = "<b>4) NIC:</b>";
  document.getElementById("demo6.1").innerHTML = "<b>5) Telephone No:</b>";
  document.getElementById("demo7.1").innerHTML = "<b>6) Date:</b>";
  document.getElementById("demo8.1").innerHTML = "<b>7) TIN No:</b>";
}
  
  
  
function IncomeVerification(){
	

        var emp_income = document.getElementById("emp_income").value;
  var trade_profit = document.getElementById("trade_profit").value;
  var ann_value = document.getElementById("ann_value").value;
  var dividend = document.getElementById("dividend").value;
  var interest = document.getElementById("interest").value;
  var annui_loyali = document.getElementById("annui_loyali").value;
  var oth_income = document.getElementById("oth_income").value;
  var tot_income = document.getElementById("tot_income").value;
  var losses = document.getElementById("losses").value;
  var int_annui = document.getElementById("int_annui").value;
  var quli_payments = document.getElementById("quli_payments").value;
  var tax_income = document.getElementById("tax_income").value;
  var tax_credits = document.getElementById("tax_credits").value;
  var bal_tax = document.getElementById("bal_tax").value;
  var tax_payable = document.getElementById("tax_payable").value;
  var int_income = document.getElementById("int_income").value;
  var inc_exempt = document.getElementById("inc_exempt").value;
  
       
 
  document.getElementById("demo19").innerHTML ="<br><br><h1>Return Of Income - Income </h1><br><br>"; 
 
  document.getElementById("demo20").innerHTML ="<h3>Part1: Declaration of Profits and Income Liable to TAX </h3> "; 
  document.getElementById("demo21").innerHTML ="<b> a) Income from Employment:</b>";
  document.getElementById("demo22").innerHTML ="<b> b) Profits from Trade,Business or Vocation:</b> ";
  document.getElementById("demo23").innerHTML ="<b> c) Net annual value:</b> "; 
  document.getElementById("demo24").innerHTML ="<b> d) Dividend:</b>";
  document.getElementById("demo25").innerHTML ="<b> e) Interest:</b>";
  document.getElementById("demo26").innerHTML ="<b> f) Annuities and Loyalities:</b> ";
  document.getElementById("demo27").innerHTML ="<b> g) Income from any other source:</b> ";
  document.getElementById("demo28").innerHTML ="<b> Total Statutory Income: </b> ";
  
  
  document.getElementById("demo21.1").innerHTML = "<b>Rs </b>" + emp_income;
  document.getElementById("demo22.1").innerHTML = "<b>Rs </b>" + trade_profit;
  document.getElementById("demo23.1").innerHTML = "<b>Rs </b>" + ann_value; 
  document.getElementById("demo24.1").innerHTML = "<b>Rs </b>" + dividend;
  document.getElementById("demo25.1").innerHTML = "<b>Rs </b>" + interest;
  document.getElementById("demo26.1").innerHTML = "<b>Rs </b>" + annui_loyali;
  document.getElementById("demo27.1").innerHTML = "<b>Rs </b>" + oth_income;
  document.getElementById("demo28.1").innerHTML = "<b>Rs </b>" + tot_income;
  

  document.getElementById("demo29").innerHTML ="<br><h3>Part 2 - Deductions from total Statutory Income</h3>";

  document.getElementById("demo30").innerHTML ="<b> a) Deductible losses from Trade,Business or Vocation:</b>";
  document.getElementById("demo31").innerHTML ="<b> b) Interest,Annuities,Royalities and ground rest:</b> ";
  document.getElementById("demo32").innerHTML ="<b> c) Qualifying payments: </b> ";
  document.getElementById("demo33").innerHTML ="<b> Taxable Income: </b> ";

  document.getElementById("demo30.1").innerHTML = "<b>Rs </b>" + losses;
  document.getElementById("demo31.1").innerHTML = "<b>Rs </b>" + int_annui;
  document.getElementById("demo32.1").innerHTML = "<b>Rs </b>" + quli_payments; 
  document.getElementById("demo33.1").innerHTML = "<b>Rs </b>" + tax_income;

   document.getElementById("demo34").innerHTML ="<br><h3>Part 3 - Calculations of Income TAX payable</h3>";
  document.getElementById("demo35").innerHTML ="<b> a) Tax credits: </b> " ;
  document.getElementById("demo36").innerHTML ="<b> b) TAX on balance taxable income: </b> ";
  document.getElementById("demo37").innerHTML ="<b> Tax Payable:   </b> " ; 
  
  document.getElementById("demo35.1").innerHTML = "<b>Rs </b>" + tax_credits;
  document.getElementById("demo36.1").innerHTML = "<b>Rs </b>" + bal_tax;
  document.getElementById("demo37.1").innerHTML = "<b>Rs </b>" + tax_payable;


  document.getElementById("demo38").innerHTML ="<br><h3>Part 4 - Income not included in Statutory Income and Income Exempted from TAX</h3>";
  document.getElementById("demo39").innerHTML ="<b> a) Income not included in Total Statutory Income: ";
  document.getElementById("demo40").innerHTML ="<b> b) Income Exempt from TAX: " ;

  document.getElementById("demo39.1").innerHTML = "<b>Rs </b>" + int_income;
  document.getElementById("demo40.1").innerHTML = "<b>Rs </b>" + inc_exempt;
  
  }
  
  

  function AssetVerification(){
  var immov = document.getElementById("immov_properties").value;
  var mov = document.getElementById("mov_properties").value;
  var busi = document.getElementById("busi_properties").value;
  var lia = document.getElementById("liabilities").value;
  var asset = document.getElementById("assests").value;
  var disasset = document.getElementById("dis_assests").value;
  

  document.getElementById("demo10").innerHTML ="<br><br><h1>Structure of Assets & Liabilities</h1> <h1>Individual</h1> <br><br>";
  document.getElementById("demo11").innerHTML ="<h3>Part 1</h3>";
  document.getElementById("demo12").innerHTML ="<b> a) Immovable Properties: ";
  document.getElementById("demo13").innerHTML ="<b> b) Movable Properties: "; 
  document.getElementById("demo14").innerHTML ="<b> c) Properties held as a part of Business: ";
  document.getElementById("demo15").innerHTML ="<b> d) As Liabilities: ";
  document.getElementById("demo16").innerHTML ="<br><h3>Part 2</h3>";
  document.getElementById("demo17").innerHTML ="<b> a) Any other assests acquired or gifts received: ";
  document.getElementById("demo18").innerHTML ="<b> b) Disposal of Assests: ";

  document.getElementById("demo12.1").innerHTML = "<b>Rs </b>" + immov;
  document.getElementById("demo13.1").innerHTML = "<b>Rs </b>" + mov;
  document.getElementById("demo14.1").innerHTML = "<b>Rs </b>" + busi; 
  document.getElementById("demo15.1").innerHTML = "<b>Rs </b>" + lia;
  document.getElementById("demo17.1").innerHTML = "<b>Rs </b>" + asset;
  document.getElementById("demo18.1").innerHTML = "<b>Rs </b>" + disasset;
 

  
  }
  





/*-------------------------------------index----------------------------------------*/




