# I stole this from a guy on Reddit!

from pathlib import Path
import math
p = Path('../input.txt')
lines = p.read_text().splitlines()

def fuel(mass):
    return math.floor(mass / 3) - 2
def fuels(mass):
    while (mass := fuel(mass)) > 0:
        yield mass
def part1(lines):
    return sum(fuel(int(line)) for line in lines)
def part2(lines):
    return sum(mass for line in lines for mass in fuels(int(line)))

finalSum = part2(lines)
print(finalSum)