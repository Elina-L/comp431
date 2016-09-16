import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'
// import canvas from './index'

describe('Particle Functionality', () => {

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        // check position, velocity, acceleration, mass
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5], acceleration: [0,0] })
        const { position } = update(p, 1.0, {width : 800, height : 800})
        expect(position).to.eql([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([2.0, 0.0])
    })

    it('should update the velocity by the acceleration', () => {
        // similar to the previous check
        const p = particle({ velocity: [1, 1], acceleration: [0.5, -0.5] })
        const { velocity } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(velocity).to.eql([2.0, 0.0])

        // expect(1).to.equal(1)
    })

    it('particles should wrap around the world', () => {
        const p1 = particle({ position: [850, 850], velocity: [1,-1]})
        const { position } = update(p1, 1.0, {width : 800, height : 800})
        expect(position[0]).to.be.below(800);
        expect(position[1]).to.be.below(800);


        // const p3 = particle({ position: [50, 850]})
        // const { position3 } = update(p3, 1.0) 
        // expect(position3).to.equal([50, 0])

        // const p4 = particle({ position: [50, -50]})
        // const { position4 } = update(p4, 1.0)
        // expect(position4).to.equal([50, 800])

        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
        // expect(1).to.equal(1)
    })

})
