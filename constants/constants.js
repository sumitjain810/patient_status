// * `Aspirin` cures `Fever`;
// * `Antibiotic` cures `Tuberculosis`;
// * `Insulin` prevents `Diabetic` subject from dying, does not cure `Diabetes`;
// * If `Insulin` is mixed with `Antibiotic`, healthy people catch `Fever`;
// * `Paracetamol` cures `Fever`;
// * `Paracetamol` kills subject if mixed with `Aspirin`;

// * `F`: Fever
// * `H`: Healthy
// * `D`: Diabetes
// * `T`: Tuberculosis
// * `X`: Dead

// * `As`: Aspirin
// * `An`: Antibiotic
// * `I`: Insulin
// * `P`: Paracetamol

// * `As` cures `F`;
// * `An` cures `T`;
// * `I` prevents `D` subject from dying, does not cure `D`;
// * If `I` is mixed with `An`, healthy people catch `F`;
// * `P` cures `F`;
// * `P` kills subject if mixed with `As`;


// MED     STATE   EFFECT
// As        F     H
// An        T     H
// !I        D     X
// I + An    H     F
// P         F     H
// P + As          X

const stateMedicineEffect = [
  {
    healthState: 'F',
    med: ['As'],
    effect: 'H'
  },
  {
    healthState: 'T',
    med: ['An'],
    effect: 'H'
  },
  {
    healthState: 'D',
    med: ['!I'],
    effect: 'X'
  },
  {
    healthState: 'H',
    med: ['I', 'An'],
    effect: 'F'
  },
  {
    healthState: 'F',
    med: ['P'],
    effect: 'H'
  },
  {
    healthState: '',
    med: ['P', 'As'],
    effect: 'X'
  }
]


export default stateMedicineEffect;
