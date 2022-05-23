import Machines_C_4 from '../Machines_C/Machines_C_4'

export default function Materials_A_7 (output = 1) {
  return {
    name: '水',
    icon: '/static/img/materials/a7.png',
    machine: Machines_C_4((output / (60 / 1.2)).toFixed(1)),
    children: {},
    output
  }
}
