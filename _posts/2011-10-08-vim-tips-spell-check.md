---
layout: post
title: Vim tips - spell checking
---

Can you imagine VIM can do spell checking? Yes! VIM surprises you again!

For setting VIM to automatically check spelling errors, you can add the following line to your `.vimrc` file:

	set spell
It will work like charms for any files you edit with VIM later on. 

That is not the end of the story. You might wonder how to jump between misspelling words when you want to correct them. 
For that purpose, you need to following commands (in command modes): `]s` (Jump to next spelling error) and `[s` (Jump to previous spelling error).

After that, you might need some suggestions on what the possible spellings could be: move your cursor (again in command mode) to the word you need suggestions and type 
`z=`. If you don't want some words to be recognized as misspellings by VIM, you can do `zg` (add good words to your dictionary), or, the other way around, use `zw` to make 
certain words added to bad words list when they are not recognized as misspellings by VIM.

Whew! That's it for today's VIM tips session. See you next time!
