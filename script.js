const Quotes=[
  {
    id:1,
    quote:'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.',
    author:'Les Brown'
  }, 
  {
    id:2,
    quote:'Friends are the family we choose.',
    author:'Jennifer Aniston'
  },
  {
    id:3,
    quote:'My purpose: to lift your spirit and to motivate you.',
    author:'Mavis Staples'
  },
  {
    id:4,
    quote:`Kindness is one thing you can't give away. It always comes back.`,
    author:'George Skolsky'
  },
  {
    id:5,
    quote:'Great things happen to those who dont stop believing, trying, learning, and being grateful.',
    author:'Roy T. Bennett'
  },
  {
    id:6,
    quote:'Fight for the things that you care about, but do it in a way that will lead others to join you.',
    author:' Ruth Bader Ginsburg'
  },
  {
    id:7,
    quote:'Happiness is not by chance but by choice.',
    author:'Jim Rohn'
  },
  {
    id:8,
    quote:`Nothing is impossible, the word itself says I'm possible.`,
    author:'Audrey Hepburn '
  },
  {
    id:9,
    quote:'The most important thing is to try and inspire people so that they can be great in whatever they want to do.',
    author:'Kobe Bryant'
  },
  {
    id:10,
    quote:'Positive anything is better than negative nothing.',
    author:'Elbert Hubbard'
  },

]

//accessing the html elements
const Quoteelement=document.getElementById('quote')
const Authorelement=document.getElementById('author')
const Btnele=document.getElementById('btn')

//functionality to generate random quotes
Btnele.addEventListener('click',()=>{
 let i=Math.floor(Math.random()*Quotes.length)
 Quoteelement.innerText=Quotes[i].quote
 Authorelement.innerText=Quotes[i].author
})

//Math.random() generates random numbers upto 0 to 1.Each time it is called,it generates a new number.
//Math.floor converts decimal values into numeric values.
