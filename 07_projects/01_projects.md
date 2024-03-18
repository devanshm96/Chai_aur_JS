# Projects related to DOM

## project link
[Click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

# Solution code

## project 1

```javascript
const btnList = document.querySelectorAll('.button')
btnList.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    // console.log(e) // type of the event
    // console.log(e.target) //source of the event
    document.body.style.backgroundColor=btn.id //e.target.id
  })
})
```

## project 2

```javascript
const form = document.querySelector('form')

// if we get height and weight values outside, just when script loads, they will take empty values
// want to extract values after submit

form.addEventListener('submit',(e)=>{
  e.preventDefault() //prevent the submit action of form to the url/server
  
  // .value give string value
  const height = parseFloat(form.querySelector('#height').value)
  const weight = parseFloat(form.querySelector('#weight').value)
  
  const results = form.querySelector('#results')

  if(height===''|| height<0 || isNaN(height)){
    results.innerHTML="Please give valid height"
  }else if(weight===''|| weight<0|| isNaN(weight)){
    results.innerHTML="Please give valid weight"
  }else{
    const bmi = (weight*100*100/(height*height)).toFixed(2)
    if(bmi<18.5){
      results.innerHTML = `<span>${bmi} : Underweight</span>`
    }else if(bmi>18.5 && bmi<24.5){
      results.innerHTML = `<span>${bmi} : Normal Range</span>`
    }else{
      results.innerHTML = `<span>${bmi} : Overweight</span>`
    }
  }
})
```

## project 3
```javascript
const clockEle = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clockEle.innerHTML = `${date.toLocaleTimeString()}`
},1000)
```