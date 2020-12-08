##### 4.1 Sentence Analysis

Sally is turning into a sophisticated bot. It can now analyze your sentences and tell you some fun information about them.

The bot should:

- [ ] ask you for a sentence
- [ ] count the characters in the sentence and tell you if you went over 140 characters
- [ ] print the longest word in your sentence
- [ ] print the average length of the words in your sentence
- [ ] mess up your sentence: replace every 'a' with 'z' and print it back to you
- [ ] find cursing words in your sentence and replace them with "****" - for this you need to define a hardcoded list of curse words


**Hint 1:** Don't forget strings also have the *.length* property
**Hint 2:** Built-in functions are your best friend
**Hint 3:** Ignore non-characters

**Example Output**
```
Hey! Tell me a sentence, I'll do a grammar check for you.

> I think dogs are super nice but cats are super bad and annoying.

Your sentence is 64 characters long.
The longest word in your sentence is: annoying
The average length of the words in your sentence is: ...
I thing dogs zre super nice but czts zre super bzd znd znnoying.
I think dogs are super nice but cats are super *** and ********.
```
