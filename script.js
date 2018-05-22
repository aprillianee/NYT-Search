
$(document).ready(function(){
    
        // When document loads, hide div top articles
        $(".top-articles").hide();
        $(".top-articles-header").hide();
    
        // When search button is clicked
        $("#search-button").on("click", function (event) {
            
            $(".results").empty();
            $(".top-articles").show();
            $(".top-articles-header").show();
            event.preventDefault();
        
            // Takes in search inputs
            var searchVar = $("#search").val()
            console.log(searchVar);
        
           var numberOfVar = $("#numberOf").val()
            console.log(numberOfVar);
        
           var beginVar = $("#begin_date").val()
            console.log(beginVar);
        
           var endVar = $("#end_date").val()
            console.log(endVar);
    
            // Api Call
            $(".form-control").val("")
            var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
            url += '?' + $.param({
                'api-key': "1af89a08f1d54b1fad2c371a6191a7c8",
        
                'q': searchVar,
        
        
           });
        
            $.ajax({
                url: url,
                method: 'GET',
            }).done(function (result) {
                console.log(result);
        
               
               for (var i = 0; i < numberOfVar; i++) {
                   
                   // Appends numbers of search results to results div 
                   $("<span>").addClass("glyphicon glyphicon-chevron-right").appendTo(".results");
                   $("<a>").addClass("headline-title").html(result.response.docs[i].headline.main || result.response.docs[i].headline.print_headline  ).attr({href: result.response.docs[i].web_url, target: "_blank"}).appendTo(".results");
                   $("<p>").addClass("headline-body").html(result.response.docs[i].snippet ).appendTo(".results");                                         
                   $("<hr>").appendTo(".results");
                }
             
            // Throws err if err is found
           }).fail(function (err) {
                throw err;
            });
        
        });
        
        // If Clear button is clicked
        $("#clear-button").on("click", function(){
            $(".form-control").val("");
            $(".top-articles").hide();
            $(".top-articles-header").hide();
            $(".results").empty();
        })
        
    });
    