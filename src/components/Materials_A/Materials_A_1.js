import Machines_C_3 from '../Machines_C/Machines_C_3'

export default function Materials_A_1 (output = 1) {
  return {
    name: '铜矿',
    icon: '/static/img/materials/a1.png',
    machine: Machines_C_3((output / (60 / 0.3)).toFixed(1)),
    children: {},
    output
  }
}
