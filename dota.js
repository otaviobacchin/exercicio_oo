function HeroName(name) {
    this.name = name;
}

function StrengthHero(name, attribute) {
    this.attribute = attribute;
    HeroName.call(this, name)
    this.heroDetails = function() {
        console.log(`${name} is a ${attribute} hero.`)
    }
}

function AgilityHero(name, attribute) {
    this.attribute = attribute;
    HeroName.call(this, name)
    this.heroDetails = function() {
        console.log(`${name} is a ${attribute} hero.`)
    }
}

function IntelligenceHero(name, attribute) {
    this.attribute = attribute;
    HeroName.call(this, name)
    this.heroDetails = function() {
        console.log(`${name} is a ${attribute} hero.`)
    }
}

function UniversalHero(name, attribute) {
    this.attribute = attribute;
    HeroName.call(this, name)
    this.heroDetails = function() {
        console.log(`${name} is a ${attribute} hero.`)
    }
}



const Axe = new StrengthHero("Axe", "Strength");
const Luna = new AgilityHero("Luna", "Agility");
const Invoker = new IntelligenceHero("Invoker", "Intelligence");
const Abbadon = new UniversalHero("Abbadon", "Universal");

Axe.heroDetails()
Luna.heroDetails()
Invoker.heroDetails()
Abbadon.heroDetails()