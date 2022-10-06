package com.capstone.project.services;


import com.capstone.project.dtos.CalculatorDto;
import com.capstone.project.entities.Calculator;

import javax.transaction.Transactional;

public interface CalculatorService {

    @Transactional
    Calculator addCalculator(CalculatorDto calculatorDto);
}
