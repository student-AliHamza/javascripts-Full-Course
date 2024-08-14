                //  String full explanation

const name = "hitesh"
const repoCount = 50;
                //      this is normal string used
console.log(name+repoCount);
//    `` we say that batics
console.log(`my name is ${name} and my repo count is ${repoCount}`);

                //   methods of string



const gameName = new String('hitesh_ali_hamza_javed');
// to check 0 per kon sa character ha
console.log(gameName[0]);

console.log(gameName.__proto__);

// string ki length check karny ky le

console.log(gameName.length);

// string ko bary alphabets my convert karna

console.log(gameName.toUpperCase());

// string my dosry numer per kia ha
console.log(gameName.charAt(2));
// string my t kis index per ha 
console.log(gameName.indexOf('t'))



// 0 character sy ly kar 4 character tk print karna
const cricket = gameName.substring(0,4);
console.log(cricket);

// negative value sy bi print kar sakty ha

const another_string = gameName.slice(-8,4);
console.log(another_string);

// trim ka matlab starting space ur end space khatam kar deta ha

const trim_string = "    hitesh    ";
console.log(trim_string.trim());

// agr kisi link my koi chez replace karni ho

const url = "https://hitesh,com";
console.log(url.replace('hitesh','Alihamza'));



// agr check karna ho kh string my ye chez ha kh nahi


console.log(url.includes('com'));

// agr string ko array my convert karna ho to

console.log(gameName.split('_'));