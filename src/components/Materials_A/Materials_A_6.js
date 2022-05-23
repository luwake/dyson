import Machines_C_5 from '../Machines_C/Machines_C_5'

export default function Materials_A_6 (output = 1) {
  return {
    name: '原油',
    icon: '/static/img/materials/a6.png',
    machine: Machines_C_5((output / (60 / 0.3)).toFixed(1)),
    children: {},
    output
  }
}
