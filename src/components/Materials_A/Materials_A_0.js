import Machines_C_3 from '../Machines_C/Machines_C_3'

export default function Materials_A_0 (output = 1) {
  return {
    name: '铁矿',
    icon: '/static/img/materials/a0.png',
    machine: Machines_C_3((output / (60 / 0.3)).toFixed(1)),
    children: {},
    output
  }
}
