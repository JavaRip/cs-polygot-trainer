use std::fs;

fn main() {
    let filename = "../threeByThreeOnes.txt";
    let input = get_input_file(String::from(filename));

    let start = input.replace("\n", "");

    let rows = get_rows(String::from(&input));
    let cols = get_cols(String::from(&input));

    println!("rows {}", rows);
    println!("cols {}", cols);

    println!("{}", start);
}

fn get_cols(input: String) -> usize {
    input.split("\n").collect::<Vec<&str>>()[0].len()
}

fn get_rows(input: String) -> usize {
    input.split("\n").collect::<Vec<&str>>().len() - 1
}

// fn num_neighbours() -> i32 {
    // let mut neighbour_count = 0;
    // return neighbour_count;
// }

fn get_input_file(input: String) -> String {
    fs::read_to_string(input)
        .expect("Something went wrong reading the file")
}
