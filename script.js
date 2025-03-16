import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://uyyoxzfkzuhbinzwfkss.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5eW94emZrenVoYmluendma3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDY5MjcsImV4cCI6MjA1NzcyMjkyN30.e8Xka7CzlNNN_Ajtx-qaW0PN_8x0CP9Ghpt_xM6nR08'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books){
    let bookList = document.getElementById('books')
    bookList.innerHTML += `<li>${book.title} - ${book.author} - ISBN: ${book.ISBN}</li>`
  }
} 

getBooks()