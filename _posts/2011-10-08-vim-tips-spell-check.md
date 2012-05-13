---
layout: post
title: Spell checking in Vim
category: [notes, vim]
---

Can you imagine Vim can do spell checking? Yes! Vim surprises you again!

For setting Vim to automatically check spelling errors, you can add the following line to your `.vimrc` file:

	set spell
It will work like charms for any files you edit with Vim later on (What Vim will do is to highlight any misspelling
words). 

That's not the end of the story. You might wonder how to jump between misspelling words when you want to correct them. 
In that case, you need (in command modes): `]s` (jump to next spelling error) or `[s` (jump to previous spelling error).

Also, showing suggestions for possible spellings is handy as well: move your cursor (again in command mode) to the word you need suggestions and type 
`z=`. 

If you don't want some words to be recognized as misspellings, try `zg` (add good words to your dictionary), otherwise, use `zw` to make 
certain words added to bad words' list when they are not recognized as misspellings by Vim.

Whew! That's it for today's Vim tips. See you next time!
