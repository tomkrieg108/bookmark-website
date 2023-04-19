"use-strict"

// Tabs
const tabs = document.getElementById('tabs');
const tabContent = document.getElementById('tab-content');
const tabButtons = tabs.querySelectorAll('button');
const tabContentList = tabContent.querySelectorAll('.tab-content')

const onClickTab =function(e, tabIndex) {
  tabButtons.forEach( (tabBtn) => {
    tabBtn.classList.remove('border-b-4', 'border-softRed' );
  })
  tabButtons[tabIndex].classList.add('border-b-4', 'border-softRed' );
 
  tabContentList.forEach( (tabContent) => {
    tabContent.classList.add('hidden')
  })
  tabContentList[tabIndex].classList.remove('hidden');
  tabContentList[tabIndex].classList.add('flex');
}

tabButtons.forEach((el, index) => {
  el.addEventListener('click', (e) => {
    onClickTab(e, index);
  })
})

// Accordian
const accordian = document.getElementById('accordian');

accordian.addEventListener('click', function(e) {

  const btn = e.target.closest('.accordian-item button');
  if(!btn) {
    return
  }
  const item = btn.parentNode;
  const content = item.querySelector('.accordian-content');

  item.classList.toggle('open');
  content.classList.toggle('hidden')
  btn.querySelector('.open-icon').classList.toggle('hidden');
  btn.querySelector('.close-icon').classList.toggle('hidden');
} )


// Mobile nav
const navBtn = document.getElementById('nav-btn');
const navBtnClose = document.getElementById('nav-btn-close');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.querySelector('header .logo');
const logoFooter = document.querySelector('header .logo-footer');

navBtn.addEventListener('click', (e) => {
  mobileNav.classList.remove('hidden');
  navBtnClose.classList.remove('hidden');
  logoFooter.classList.remove('hidden');
  logo.classList.add('hidden');
  navBtn.classList.add('hidden');
});

navBtnClose.addEventListener('click', (e) => {
  mobileNav.classList.add('hidden');
  navBtnClose.classList.add('hidden');
  logoFooter.classList.add('hidden');
  logo.classList.remove('hidden');
  navBtn.classList.remove('hidden');
});