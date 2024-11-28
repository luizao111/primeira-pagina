import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1> Versionando minha aplicação web</h1>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/243c6e16-ace7-4101-af38-a8aa88d389bb/dfydir4-333f4823-2363-4c26-b736-d7194438200a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0M2M2ZTE2LWFjZTctNDEwMS1hZjM4LWE4YWE4OGQzODliYlwvZGZ5ZGlyNC0zMzNmNDgyMy0yMzYzLTRjMjYtYjczNi1kNzE5NDQzODIwMGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2xQ7zHQbESypX4lcb45lsRUBbgan-ZGUqsFFzhr0q4U" >
  </div>
`

setupCounter(document.querySelector('#counter'))
