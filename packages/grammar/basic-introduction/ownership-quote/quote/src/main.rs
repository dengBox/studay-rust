fn main() {
    let x = 5;
    let y = &x;
    // let y = x;

    assert_eq!(5, x);
    assert_eq!(5, *y);
    // assert_eq!(5, y);
}

// fn main() {
//     let reference_to_nothing = dangle();
// }

// fn dangle() -> &String {
//     let s = String::from("hello");

//     &s
// }