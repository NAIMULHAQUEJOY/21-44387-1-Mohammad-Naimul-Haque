// Generics are type safe and can handle a huge varity of data tuypes

function display <T> (id: T, name: T): void {
    console.log(`Id= ${id}, Name= ${name}`);
}
display<number | string>(101, "steve");
display<string> ("102", "Bill");

