
const Company = require('../models/company')

exports.findAll = (req, res) => {
    Company.find((err, companies) => {
        if (err) throw err
        res.send(companies)
        res.end()
    })
}

exports.init = (req, res) => {
    const apple = new Company({
        name: 'Apple',
        street: 'CA',
        phone: '1234567890'
    })
    const samsung = new Company({
        name: 'Samsung',
        street: 'CA',
        phone: '1234567890'
    })
    const nokia = new Company({
        name: 'Nokia',
        street: 'CA',
        phone: '1234567890'
    })
    const oneplus = new Company({
        name: 'OnePlus',
        street: 'CA',
        phone: '1234567890'
    })
    apple.save((err) => {
        if (err) throw err
        console.log('Apple company is Added')
        const iPhone7 = new Product({ code: 'iPhone7-1', name: 'iPhone7', details: 'iPhone7', company: apple._id })
        iPhone7.save((err) => {
            if (err) throw err
            console.log('iPhone7 is added')
        })
        const iPhonePro = new Product({ code: 'iPhonePro-1', name: 'iPhonePro', details: 'iPhonePro', company: apple._id })
        iPhonePro.save((err) => {
            if (err) throw err
            console.log('iPhonePro is added')
        })
    })
    samsung.save((err) => {
        if (err) throw err
        console.log('Samsung company is Added')
        const Note9 = new Product({ code: 'Note9-1', name: 'Note9', details: 'Note9', company: samsung._id })
        Note9.save((err) => {
            if (err) throw err
            console.log('Note9 is added')
        })
        const S10 = new Product({ code: 'S10', name: 'S10', details: 'S10', company: samsung._id })
        S10.save((err) => {
            if (err) throw err
            console.log('S10 is added')
        })
    })
    nokia.save((err) => {
        if (err) throw err
        console.log('Nokia company is Added')
        const Nokia7 = new Product({ code: 'Nokia7-1', name: 'Nokia7', details: 'Nokia7', company: nokia._id })
        Nokia7.save((err) => {
            if (err) throw err
            console.log('Nokia7 is added')
        })
        const Nokia5310 = new Product({ code: 'Nokia5310-1', name: 'Nokia5310', details: 'Nokia5310', company: nokia._id })
        Nokia5310.save((err) => {
            if (err) throw err
            console.log('Nokia5310 is added')
        })
    })
    oneplus.save((err) => {
        if (err) throw err
        console.log('OnePlus company is Added')
        const OnePlus8T = new Product({ code: 'OnePlus8T-1', name: 'OnePlus8T', details: 'OnePlus8T', company: oneplus._id })
        OnePlus8T.save((err) => {
            if (err) throw err
            console.log('OnePlus8T is added')
        })
        const OnePlusNord = new Product({ code: 'OnePlusNord-1', name: 'iOnePlusNord', details: 'OnePlusNord', company: oneplus._id })
        OnePlusNord.save((err) => {
            if (err) throw err
            console.log('OnePlusNord is added')
        })
    })
    res.send('Initial Data Loaded..!!')
    res.end()
}