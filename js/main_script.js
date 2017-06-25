$(document).ready(function(){
	
	timeLine();
	
	});

	function timeLine(){
		
		var d = new Date();
        var n = d.getDate();

		var dateProgress = 3.3334;
		var dateProgress2 = n * dateProgress;
		
		var eventDate;
		var eventContent;
		var eventIcon;

		$('#t1').html(events[0][2]);
		$('#t2').html(events[1][2]);
		$('#t3').html(events[2][2]);
		$('#t4').html(events[3][2]);
		$('#t5').html(events[4][2]);
		
			function timePosition(evDate,element){		
				var x = evDate.toString();
					
					if(x.substring(2,2) == '.'){
						var y = x.substring(0,1);
					}else{
						var y = x.substring(0,2);
					}
					
					var yNumber = parseInt(y);
			
						if(yNumber <= n){
			
							$(element + ' > .fa').addClass('past');
			    
						}			
				$(element).css('left',y * dateProgress + '%');		
			}
			
			timePosition(events[0][0],'#t1');
			timePosition(events[1][0],'#t2');
			timePosition(events[2][0],'#t3');
			timePosition(events[3][0],'#t4');
			timePosition(events[4][0],'#t5');
			
		function showTooltip(elem){		
			$(elem).tooltip({title: '<p>'+ eventDate +'</p><div class="tooltip-inside">'+ eventContent +'</div>', html: true});		
		}
		
		$('#t1 > .fa').bind('mouseover',function(){
		
			eventDate = events[0][0];
			eventContent = events[0][1];
			icon = events[0][2];
			
				showTooltip(this);		
		});
		
		$('#t2 > .fa').bind('mouseover',function(){
		
			eventDate = events[1][0];
			eventContent = events[1][1];
			icon = events[1][2];
				
				showTooltip(this);	
		});
		$('#t3 > .fa').bind('mouseover',function(){
		
			eventDate = events[2][0];
			eventContent = events[2][1];
			icon = events[2][2];
			
				showTooltip(this);	
		});
		$('#t4 > .fa').bind('mouseover',function(){
		
			eventDate = events[3][0];
			eventContent = events[3][1];
			icon = events[3][2];

				showTooltip(this);			
		});
		$('#t5 > .fa').bind('mouseover',function(){
		
			eventDate = events[4][0];
			eventContent = events[4][1];
			icon = events[4][2];
				
				showTooltip(this);		
		});
			
		$('.progress-bar').attr('style','width:' + dateProgress2 + '%' );
		
		// wersja mobilna
		
		function showData(elem,eventDate,eventContent,icon){		
			$(elem).html(icon +'<p>'+ eventDate +'</p><div class="mobile-inside">'+ eventContent +'</div>');
		}
		
		showData('#m1',events[0][0],events[0][1],events[0][2]);
		showData('#m2',events[1][0],events[1][1],events[1][2]);
		showData('#m3',events[2][0],events[2][1],events[2][2]);
		showData('#m4',events[3][0],events[3][1],events[3][2]);
		showData('#m5',events[4][0],events[4][1],events[4][2]);
		
		timePosition(events[0][0],'#m1');
		timePosition(events[1][0],'#m2');
		timePosition(events[2][0],'#m3');
		timePosition(events[3][0],'#m4');
		timePosition(events[4][0],'#m5');

	}
