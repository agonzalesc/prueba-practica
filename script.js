var btN=document.getElementById('bt-1'),
	btn=document.getElementById('bt-2'),
	pr=document.getElementById('pr');



	function cambiar()
	{
		pr.classList.add('cam')
	}

	function cambiar1()
	{
		pr.classList.remove('cam')
	}

	btN.addEventListener('click',cambiar,true);
	btn.addEventListener('click',cambiar1,true);
