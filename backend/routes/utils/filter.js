const rake = require('node-rake')
const synonyms = require("synonyms");
const ir = require('./input-reader');
const kr = require('./keywords-reader');


const standardFilter = async(questions, category) => {
    const input_questions = ir.readInput(questions);
    var filtered_questions = [];
    var selected_indexes = [];

    await kr.readKeywords(category).then((keywords) => {
        input_questions.filter((readInput, index) => {
            const inputKeywords = rake.generate(readInput);
            var input = "";

            inputKeywords.forEach((inputKeyword) => {
                input = input.concat(inputKeyword);
            })

            input = input.trim();

            for(var i=0; i<keywords.length; i++) {
                const keyword = keywords[i];
                const compareKeyword = keyword.replace(/\s/g, '');
                const compareInput = input.replace(/\s/g, '');

                if(selected_indexes.includes(index)) {
                    break;
                }
                else if(compareInput.indexOf(compareKeyword) > -1 || compareKeyword.indexOf(compareInput) > -1) {
                    filtered_questions.push(questions[index]);
                    selected_indexes.push(index);
                    break;
                }
            }    
        });
    });

    return filtered_questions;
}


const advancedFilter = async(questions, category) => {
    const input_questions = ir.readInput(questions);
    var filtered_questions = [];
    var selected_indexes = [];

    await kr.readKeywords(category).then((keywords) => {
        input_questions.filter((readInput, index) => {
            const inputKeywords = rake.generate(readInput);
            var input = "";

            inputKeywords.forEach((inputKeyword) => {
                input = input.concat(inputKeyword);
            })

            input = input.trim();
            
            for(var i=0; i<keywords.length; i++) {
                const keyword = keywords[i];
                const compareKeyword = keyword.replace(/\s/g, '');
                const compareInput = input.replace(/\s/g, '');
                
                if(selected_indexes.includes(index)) {
                    break;
                }
                else if(compareInput.indexOf(compareKeyword) > -1 || compareKeyword.indexOf(compareInput) > -1) {
                    filtered_questions.push(questions[index]);
                    selected_indexes.push(index);
                    break;
                }
                else if(i == keywords.length - 1) {
                    inputKeywords.forEach((inputKeyword) => {
                        const synonyms_n = synonyms(inputKeyword, "n") || [];
                        const synonyms_v = synonyms(inputKeyword, "v") || [];
                        const synonyms_nv = synonyms_n.concat(synonyms_v);

                        synonyms_nv.forEach((synonym_nv) => {
                            if(!selected_indexes.includes(index) && keywords.includes(synonym_nv.toUpperCase())) {
                                filtered_questions.push(questions[index]);
                                selected_indexes.push(index);
                            }
                        })
                        
                    })
                }
            }    
        });
    });

    return filtered_questions;
}


module.exports = { standardFilter, advancedFilter };