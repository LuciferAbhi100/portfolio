$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwVByI1rpIToJiVKkMTyxROAF28a50RQjppYO-JhDueanGzqU5GEN9pNbSZj8MTCiiMSQ/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})