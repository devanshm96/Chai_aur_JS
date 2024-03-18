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