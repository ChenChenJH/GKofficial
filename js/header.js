document.writeln("<!doctype html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("	<meta charset=\'UTF-8\'>");
document.writeln("	<title>广东科学技术职业学院</title>");
document.writeln("	<script type=\'text/javascript\' src=\'js/jquery.js\'></script>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("	<div id=\'mycontainer\'>");
document.writeln("		<!--头部 logo-->");
document.writeln("		<div id=\'logo\'>");
document.writeln("			<img src=\'images/index/logo.png\'>");
document.writeln("			<div id=\'logo_search\'>");
document.writeln("				<input type=\'text\' style=\'width:140px;\' placeholder=\'请输入关键字\' />&nbsp;");
document.writeln("				<input type=\'button\' value=\'搜索\' style=\'color:green;background:#AFEEEE;\' />");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<!--菜单栏-->");
document.writeln("		<div id=\'nav\'>");
document.writeln("			<ul>");
document.writeln("				<li class=\'mymenu\'>");
document.writeln("					<a href=\'index.html\'>首页</a>");
document.writeln("				</li>");
document.writeln("				<li class=\'mymenu\'>");
document.writeln("					<a href=\'about-school.html\'>学校概况</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'about-school.html\'>学校简介</a></li>");
document.writeln("		                    <li><a href=\'about-leader.html\'>现任领导</a></li>");
document.writeln("		                    <li><a href=\'about-expert.html\'>专家教授</a></li>");
document.writeln("		                    <li><a href=\'#\'>管理架构</a></li>");
document.writeln("		                    <li><a href=\'about-school-history.html\'>办学历史</a></li>");
document.writeln("		                    <li><a href=\'about-school-view.html\'>学校风貌</a></li>");
document.writeln("		                    <li><a href=\'about-school-address.html\'>地理位置</a></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("				</li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>教学院系</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'computer-college.html\'>计算机学院</a><a href=\'#\'></li>");
document.writeln("		                    <li><a href=\'#\'>经管学院</a><a href=\'#\'></li>");
document.writeln("		                    <li><a href=\'#\'>人文学院</a><a href=\'#\'></li>");
document.writeln("		                    <li><a href=\'#\'>建工学院</a><a href=\'#\'></li>");
document.writeln("		                    <li><a href=\'#\'>广州学院</a><a href=\'#\'></li>");
document.writeln("		                    <li><a href=\'#\'>艺术学院</a><a href=\'#\'></li>");
document.writeln("	                    	<li><a href=\'#\'>财金学院</a><a href=\'#\'></li>");
document.writeln("                    		<li><a href=\'#\'>体育学院</a><a href=\'#\'></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("				</li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>校园生活</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'station.html\'>歧关车</a></li>");
document.writeln("		                    <li><a href=\'#\'>公交路线</a></li>");
document.writeln("		                    <li><a href=\'#\'>年度校历</a></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("				</li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>教学教务</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'#\'>学籍管理</a></li>");
document.writeln("		                    <li><a href=\'#\'>教务管理</a></li>");
document.writeln("		                    <li><a href=\'#\'>政务管理</a></li>");
document.writeln("		                    <li><a href=\'#\'>规章制度</a></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("				</li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>招生就业</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'#\'>就业信息</a></li>");
document.writeln("		                    <li><a href=\'#\'>招生信息</a></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("	            </li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>信息公开</a>");
document.writeln("					<div class=\'cd\'>");
document.writeln("		                <ul>");
document.writeln("		                    <li><a href=\'#\'>学风建设</a></li>");
document.writeln("		                </ul>");
document.writeln("	            	</div>");
document.writeln("	            </li>");
document.writeln("				<li class=\'mymenu\'><a href=\'#\'>图书馆</a></li>");
document.writeln("			</ul>");
document.writeln("		</div>	");
document.writeln("	</div>");
document.writeln(" ");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("	$(function(){");
document.writeln("		$(\'.mymenu\').mouseover(function(){");
document.writeln("			$(this).css(\'background\',\'url(images/index/forumMenuBg.jpg) repeat-x\');");
document.writeln("			$(this).children(\'.cd\').stop().show(300);");
document.writeln("		});");
document.writeln("		$(\'.mymenu\').mouseout(function(){");
document.writeln("			$(this).css(\'background\',\'#6cc\');");
document.writeln("			$(this).children(\'.cd\').stop().hide(300);");
document.writeln("		});");
document.writeln("	})");
document.writeln("</script> ");
document.writeln("</body>");
document.writeln("</html>");