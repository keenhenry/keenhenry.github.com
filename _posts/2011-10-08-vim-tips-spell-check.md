---
layout: post
title: Vim tips - spell checking
---

Can you imagine VIM can do spell checking? Yes! VIM surprises you again!

For setting VIM to automatically check spelling errors, you can add the following line to your .vimrc file:

set spell

It will work like charms for any files you edit with VIM later on. And that is not the end of the story, you might wonder how to jump between misspelling words when 
you want to correct them. For that purpose, you need to following commands (in command modes):

]s - Jump to next spelling error
[s - Jump to previous spelling error

Or, sometimes you might need some suggestions on what the possible spellings could be, move your cursor (again in command mode) to the word you need suggestions and type 
z=. If you want some words to not be recognized as misspelling by VIM, you can do zg (add good words to your dictionary). On the other hand, you might want to use zw to 
make certain words added to bad words list when they originally are not recognized as misspelling by VIM.

Whew! That's it for today's VIM tips session. See you next time!
