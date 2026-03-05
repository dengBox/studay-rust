fn main() {
    let mut outer = 0;
    while outer < 3 {
        let mut inner = 0;
    
        while inner < 2 {
            println!("Outer: {}, Inner: {}", outer, inner);
            inner += 1;
        }
    
        outer += 1;
    }
}
