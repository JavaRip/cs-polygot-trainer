use std::fs;

fn main() {
    let filename = "../threeByThreeOnes.txt";
    let input = get_input_file(String::from(filename));
    println!("{}", input);
}

fn get_input_file(input: String) -> String {
    let contents = fs::read_to_string(input)
        .expect("Something went wrong reading the file");

    contents
}
