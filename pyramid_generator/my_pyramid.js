const count =10;
character = "!"
spaceCharacter = " "
for (let i = 1; i <=count; i++) {
    console.log(spaceCharacter.repeat(count - i) + character.repeat(2 * i - 1) + spaceCharacter.repeat(count - i));
} 