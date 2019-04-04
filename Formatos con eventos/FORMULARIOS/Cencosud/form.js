$(function(){
    var form=$('#product-form');
    var result,input,inputVal,parentInput=null;
    var fields=["product","name","lastname","dni","email","phone"];
    var regExp= {
        email:/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
        integer:/^[0-9]*$/,
        //name:/^[a-zA-ZñÑáéíóúñ\s]*$/,
        //name:/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
        alphanum:/^[0-9a-zA-ZñÑ]*$/,
        //phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        dni:/^[0-9]{8}$/,
        float:/^[0-9]*\.?[0-9]+$/,
        date:/^([0-9]{2})\/([0-9]{2})\/([0-9]{2})$/,     
        number:/^-?[0-9]+([,\.][0-9]*)?$/,
        url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    };
    
   
    //data test
//    var testData=["TACRE","Jhonathan","Castro","00000001","mytest@xmail.com","998563254"];            
//    for( var index in fields) {
//        form.find('input[name="'+fields[ index ]+'"]').val( testData[ index ] );            
//    }
    //$('#product').change(function () {
      //  var url = $(this).val();
        //window.location.hash = url;
       // console.log('select Changed');
    //});

    //window.addEventListener('hashchange', fn, false);

   // window.onload = fn; // fire on pageload

    //function fn() {
       // $('#product').val(window.location.hash.replace(''));
      //  console.log("hash = " + window.location.hash);
    //}


    $('.numeric').keypress(function(e){
        var code = e.keyCode || e.which;
        if(code < 48 || code > 57) { //Enter keycode
            e.preventDefault();
        }
    });
    
    form.on('submit', function(e) {
        result=true;            
        form.find('.has-error').removeClass('has-error');
                
        var fieldData={};
        for( var index in fields) {
            
            input=form.find('input[name="'+fields[ index ]+'"], select[name="'+fields[ index ]+'"]');
            inputVal=input.val();
            parentInput=input.parents('.campo');
            
            fieldData[ fields[ index ] ]=inputVal;
            //console.log(fields[ index ]);
            switch ( fields[ index ] ){
                case 'name':
                case 'lastname':
                    if( inputVal.length===0 || !inputVal.match( regExp.name ) ){
                        parentInput.addClass('has-error');
                        result=false;
                    }
                break;
                case 'dni':
                    if( inputVal.length===0 || !inputVal.match( regExp.dni ) ){
                        parentInput.addClass('has-error');
                        result=false;
                    }
                break;                
                case 'email':
                    if( inputVal.length===0 || !inputVal.match( regExp.email ) ){
                        parentInput.addClass('has-error');
                        result=false;
                    }
                break;               
                case 'phone':
                    if( inputVal.length===0 || !inputVal.match( regExp.phone ) ){
                        parentInput.addClass('has-error');
                        result=false;
                    }
                break;               
                case 'product':                    
                    if( inputVal.length===0 ){
                        parentInput.addClass('has-error');
                        result=false;
                    }
                break;
            }
        }
        
        if(result && !$('#chkTerminos').is(':checked')){
            $('#chkTerminos-block').addClass('has-error');
            result=false;
        }
        
        if(!result) {
            $('#formMessage').text('Por favor, verifique su información.').show();
        }
        else {
            fieldData['action']="cencosud_product_form";            
            //console.log(fieldData);

            //var postUrl='http://addaccion.net/BancoCencosudCRM/Api/LeadApi.svc/SendLead';
            //var postUrl='http://addaccion.net/QABancoCencosudCRM/Api/LeadApi.svc/SendLead';
            var postUrl=form.attr('action');
            $('#formMessage, #respuesta-exitosa, #respuesta-fallida').hide();

            jQuery.ajax({
                url: postUrl,
                data: fieldData,
                cache: false,
                type: "POST",
                success: function (result) {
                    $('#product-form').hide();
                    
                    if (result.status=='true') {
                        //console.log(result);
                        
                        switch(result.view) {

                            case 1:  
                            $('#respuesta-fallida').show();
                                $('#respuesta-fallida .extra').text('Gracias por ingresar tus datos. Revisaremos tu solicitud y nos pondremos en contacto contigo de contar con el producto');
                                break;
                            case 2:  $('#respuesta-exitosa').show();
                                fbq('track', 'CompleteRegistration');
                                //$('#respuesta-exitosa .orange').text('Usted califica para el producto solicitado. Pronto nos pondremos en contacto contigo.');
                                break;
                            case 3:  $('#respuesta-fallida').show();
                                $('#respuesta-fallida .extra').text('un asesor se estará comunicando contigo.');
                                break;  
                            case 4:  $('#respuesta-fallida').show();
                                $('#respuesta-fallida .extra').text('al parecer ya cuentas con este producto. De no ser así, por favor comunícate con nuestra banca telefónica 610 7900.');
                                break;    
                            case 8:  $('#respuesta-fallida').show();
                                $('#respuesta-fallida .extra').text('intenta ingresar tus datos nuevamente, al parecer algo no salió bien.');
                                break;    
                            default:   $('#respuesta-fallida').show();  
                        }
                        
                    } else {
                        $('#respuesta-fallida').show();
                        //$('#respuesta-fallida .extra').text('Pero se detectó un error en sus datos, por favor verifique su información.');
                    }
                },
                error: function (e) {
                    $('#formMessage').text('Hubo un error en los datos enviados, inténtelo nuevamente por favor').show();
                }
            });
        }
        
        
        return false;
    });

});