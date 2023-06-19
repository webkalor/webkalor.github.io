const form= document.querySelector("form");
const btnenreg= document.querySelector(".btn")
let telephone= document.getElementById("telephone")
const isValidEmail= email=>{
	const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
	return re.test(String(email).toLowerCase());

}
const Regex = /^[a-zA-Z-\s]+$/
const Regexp= /^[0-9]{1,3}/

const setSucces = element=>{
	const inputControl= element.parentElement;
	const Errordisplay= inputControl.querySelector('.error');

	Errordisplay.innerText= ''
	inputControl.classList.add('succes')
	inputControl.classList.remove('error')
}

const setError = (element,message)=>{
	const inputControl= element.parentElement;
	const Errordisplay= inputControl.querySelector('.error');

	Errordisplay.innerText= message
	inputControl.classList.add('error')
	inputControl.classList.remove('succes')
}

form.addEventListener('submit', function(e) {
		
		let prenom= document.getElementById("prenom");
		let nom= document.getElementById("nom");
		let telephone= document.getElementById("telephone");
		let email= document.getElementById("email");
		let mdp= document.getElementById("mdp");
		let prenomValue= prenom.value.trim();
		let nomValue= nom.value.trim();
		let emailvalue= email.value.trim();
		let mdpvalue = mdp.value.trim();
		let telvalue= telephone.value.trim(); 
		
		
		if(prenomValue===''){
			setError(prenom, 'Le champ est obligatoire');
			e.preventDefault();
		}else if(Regex.test(prenomValue) == false){
			setError(prenom, 'Le champ n\'accepte que des lettres');
			e.preventDefault();
		}
		else{
			setSucces(prenom)
		}
		if(nomValue=== ''){
			setError(nom, 'Le champ est obligatoire');
			e.preventDefault();
		}else if(Regex.test(nomValue) == false){
			setError(nom, 'Le champ n\'accepte que des lettres');
			e.preventDefault();
		}	
		else{
			setSucces(nom)
		}
		if(emailvalue===''){
			setError(email, 'Le champ est obligatoire')
			e.preventDefault();
		}else if(!isValidEmail(emailvalue)){
			setError(email, 'L\'adresse mail n\'est pas valide')
			e.preventDefault();
		}else {
			setSucces(email)
		}
		if (mdpvalue===''){
			setError(mdp, 'Le champ est obligatoire')
			e.preventDefault();
		}else if (mdpvalue.length < 8){
			setError(mdp, 'Le mot de passe doit contenir au moins 8 caractères');
			e.preventDefault();
		}else{
			setSucces(mdp) 
		}
		if(telvalue===''){
			setError(telephone, 'Le champ est obligatoire');
			e.preventDefault();
		}else if(Regexp.test(telvalue) == false){
			setError(telephone, 'Le champ n\'accepte que des chiffres');
			e.preventDefault();
		}
		else{
			setSucces(telephone)
		}
	});

function desactiver(){
	btnenreg.disabled = true;
	btnenreg.style.backgroundcolor= "grey";
}

telephone.addEventListener("change", activation);
function activation(){
	if(form.querySelectorAll("telephone").value === ""){
		btnenreg.disabled= true;
	}else{
		btnenreg.disabled= false;
	}
}
