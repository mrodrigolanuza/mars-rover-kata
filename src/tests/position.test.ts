import { stringify } from 'querystring';
import {Position} from '../core/position'

describe('The Position in the World', () => {

    it('must be instantiated.', () => {
        const xPos = 3;
        const yPos = 5;
        const orientation = 'N';
        
        const position = Position.create(xPos, yPos, orientation);
		
		expect(position).toBeInstanceOf(Position);
	});

    it('must have a not-empty orientacion.', () => {
        const xPos = -3;
        const yPos = -5;
        let orientation = '';
        
        expect(()=>{
            const position = Position.create(xPos, yPos, orientation);
        }).toThrow(Error('Orientation not valid.'));
	});

    it('must have a valid orientacion.', () => {
        const xPos = 1;
        const yPos = 1;
        let orientation = 'irrelevant';
        
        expect(()=>{
            const position = Position.create(xPos, yPos, orientation);
        }).toThrow(Error('Orientation with unknown value.'));
	});
});
