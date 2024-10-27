import {HeroiFactory} from '../factories/heroiFactory.js';

export class Database {
    static #heroes = new Map();

    static save(hero) {
        this.#heroes.set(hero.id, hero);
        return hero;
    }

    static findAll() {
        return Array.from(this.#heroes.values());
    }

    static findById(id) {
        return this.#heroes.get(id);
    }

    static update(id, updatedData) {
        const hero = this.#heroes.get(id);

        if (!hero) {
            return null;
        }

        const updatedHero = { ...hero, ...updatedData };

        if (updatedData.type && updatedData.type !== hero.type) {
            const newHero = HeroiFactory.create(updatedData.type, updatedHero.name, updatedHero.age);
            newHero.id = id;
            this.#heroes.set(id, newHero);
            return newHero.toJSON();    
        }

        this.#heroes.set(id, updatedHero);
        return updatedHero;
    }

    static delete(id) {
        return this.#heroes.delete(id);
    }
}
