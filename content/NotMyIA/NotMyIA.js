var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"title: Not my IA"},{"#":"author: feserr"},"^You are in a room that evokes some weird felling. A shelve is plenty of book but you hardly recognize anyone. In some strange way you start to make sense where you are.","\n","^'Why did you do that?'","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^'I dunno.'",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^'I didn't made anything.'",{"->":"$r","var":true},null]}],["ev",{"^->":"0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^'You deserved it.'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n",{"->":"lie1"},{"->":"0.g-0"},{"#f":7}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n",{"->":"lie2"},{"->":"0.g-0"},{"#f":7}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.8.s"},[{"#n":"$r2"}],"\n",{"->":"lie3"},{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"lie1":["^'Always the same quote,' a deep disappointment fill her eyes. She starts moving around the room with the lost sight.","\n",{"->":"past2"},{"#f":3}],"lie2":[["^'You didn't made anything,' she starts to look at me with a angry face while gets closer to my face.","\n","^'Now is when you told me that Krial did it,' a long pause since she start talking again, 'so you are not going to say anything, don't you?'","\n",["ev",{"^->":"lie2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'It's true, Krial made it.'",{"->":"$r","var":true},null]}],"ev","str","^Stay quiet.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"lie2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#f":7}],"c-1":["\n",{"->":"past2"},{"#f":7}]}],{"#f":3}],"lie3":["^a","\n",{"->":"past2"},"^'I am done with all of these, you are like a child, never taking responsibilities of your acts,' she sounds disappointed with a mix of relived","\n",{"#f":3}],"past2":["^The end.","\n","end",{"#f":3}],"#f":3}],"listDefs":{}};