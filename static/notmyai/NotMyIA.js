var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"title: Not my AI"},{"#":"author: feserr"},"^Te encuentras en una habitación que te evoca una sensación extraña. Una estanteria repleta de libros es lo único que decora las paredes. Pese al poco tamaño de la habitación no consigues reconocer ninguno de los libros, aun así, los lomos negros te hacen pensar que se tratan de novelas policicas. A tu lado tienes una cama grande que esta deshecha, por las arrugas parece ser que han dormido dos personas. El sonido de una voz te hace percatarte de que no estas solo.","\n","^'¿Por qué lo hiciste?'","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^'No lo se.'",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^'No he hecho nada.'",{"->":"$r","var":true},null]}],["ev",{"^->":"0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^'Te lo mereces.'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n",{"->":"lie1"},{"->":"0.g-0"},{"#f":7}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n",{"->":"lie2"},{"->":"0.g-0"},{"#f":7}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.8.s"},[{"#n":"$r2"}],"\n",{"->":"past2"},{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"lie1":["^'Siempre la misma coletilla' por como arquea los ojos y su mirada al suelo se le nota una gran decepción. Empieza a dar vueltas por la habitación con la mirada perdida.","\n",{"->":"past2"},{"#f":3}],"lie2":[["^'¿Qué no has hecho nada?' se te acerca con la mirada llena de rabia fijandose directamente en tus ojos como si tratase de encontrar la mentira hundida en tu retina.","\n","^'Ahora es cuando me dices que fue Krial' hace una pausa como esperando para que le conteste, 'asi que no vas a decir nada, ¿no?.'","\n",["ev",{"^->":"lie2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'Es verdad, fue cosa de Krial.'",{"->":"$r","var":true},null]}],"ev","str","^Quedarse callado.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"lie2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"lie21"},{"#f":7}],"c-1":["\n",{"->":"past2"},{"#f":7}]}],{"#f":3}],"lie21":["^Te mira de forma incredula, 'Es una IA, no están programadas para hacer eso' se acerca a Krial y lo empuja violentamente sin conseguir que se mueva un apice.","\n","^'Pobre trasto, la cantidad de tonterias que tendrá que oir de ti.'","\n",{"->":"past2"},{"#f":3}],"past2":[["^'Estoy harta de todo esto, eres como un crio, nunca te haces responsable de ninguno de tus actos' una mezcla de tristeza y alivio envuelven sus palabras. 'Ya me dijeron como eras, sin embargo conseguiste engañarme todo este tiempo con tu palabreria y mirada.'","\n","ev","str","^Despiertate.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"#":"CLEAR"},{"->":"day1"},{"#f":7}]}],{"#f":3}],"day1":["^Te despiertas con un gran dolor de cabeza. El mismo sueño otra vez, no para de repetirse cada día que tienes una cita.","\n",{"->":"ending"},{"#f":3}],"ending":[["^¿Volver a empezar?","\n","ev","str","^Sí.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"#":"RESTART"},"end",{"#f":7}],"c-1":["\n","end",{"#f":7}]}],{"#f":3}],"#f":3}],"listDefs":{}};