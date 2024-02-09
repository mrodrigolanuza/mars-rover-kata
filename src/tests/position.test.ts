import { stringify } from 'querystring';
import {Position} from '../core/position'

describe('The Position in the World', () => {

    it('must have a valid orientacion.', () => {
        const xPos = 3;
        const yPos = 5;
        
        const positionNorth = Position.create(xPos, yPos, 'N');
		const positionSouth = Position.create(xPos, yPos, 'S');
        const positionEast = Position.create(xPos, yPos, 'E');
        const positionWest = Position.create(xPos, yPos, 'W');

		expect(positionNorth).toBeInstanceOf(Position);
        expect(positionSouth).toBeInstanceOf(Position);
        expect(positionEast).toBeInstanceOf(Position);
        expect(positionWest).toBeInstanceOf(Position);
	});

    it('must have a not-empty orientacion.', () => {
        const xPos = -3;
        const yPos = -5;
        let orientation = '';
        
        expect(()=>{
            const position = Position.create(xPos, yPos, orientation);
        }).toThrow(Error('Orientation not valid.'));
	});

    it('must throw an error with when not valid orientacion.', () => {
        const xPos = 1;
        const yPos = 1;
        let orientation = 'irrelevant';
        
        expect(()=>{
            const position = Position.create(xPos, yPos, orientation);
        }).toThrow(Error('Orientation with unknown value.'));
	});
});
