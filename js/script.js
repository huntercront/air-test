function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar'; 
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}


var modal = document.querySelector('.form-modal');
var contuctUs = document.querySelector('.contuct-us');
var closeModal = document.querySelector('.close-form-button');
contuctUs.addEventListener('click',function(e){
	modal.classList.add('visible');
	if(document.body.clientHeight > window.innerHeight){
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = getScrollbarWidth()+'px';
	}
})
closeModal.addEventListener('click',function(e){
	hideModal();
})
document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hideModal();
	}
};


function hideModal(){
	if(modal.classList.contains('visible')){
	modal.classList.remove('visible');
	if(document.body.clientHeight > window.innerHeight){
		document.body.style.overflow = 'auto';
		document.body.style.paddingRight = 0+'px';
	}
}
}
var formInputs = document.querySelectorAll('.form-body input,.form-body textarea')
for (var i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener('input', function(){
		this.setAttribute('value', this.value);
	})
}
