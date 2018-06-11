06/06/2018
####website: [FDMcreative.com](http://www.fdmcreative.com) 
####email: [federico.delmonte@gmail.com](federico.delmonte@gmail.com)
---
# JavaScript Math Game with Countdown
### *a small javascript math game with a 10 seconds countdown*
-

This small javasctipt project prompts the user with a math question and upon correct answer it shows another one, ad libitum.
In case of correct answer 1 point is given, otherwise 1 point is subtracked.
If the 10 seconds timer runs out, the game is over.

The functionalities are: a countdown timer, a random addition question with numbers between 1 and 101, an input field and a submit button, possibility of submitting with enter key, automatic focus on input field to increase input speed and user experience.

-

Difficulties:

- After a correct answer has been entered, make the timer resets correctly (start again from 10 AND close the precedent countdown to avoid overlaps).

Not Implemented:

- Use of delay to hide the Match message after 500 milliseconds.
- Getting out of the mainGame function the sub-functions "if else" because the variables A, B and RESULT remain undefined as declared at the beginning, they don't update with the new numbers. 