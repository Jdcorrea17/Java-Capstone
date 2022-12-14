package com.capstone.project.services;

import com.capstone.project.dtos.CalculatorDto;
import com.capstone.project.entities.Calculator;
import com.capstone.project.entities.User;
import com.capstone.project.repositories.CalculatorRepository;
import com.capstone.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class CalculatorServicelmpl implements CalculatorService{
    @Autowired
    private CalculatorRepository calculatorRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public Calculator addCalculator(CalculatorDto calculatorDto){
        Calculator calculator = new Calculator(calculatorDto);
    //    double total = (calculator.getPrincipal() * calculator.getInterest()) / (1 - Math.pow(1 + calculator.getInterest(), - calculator.getMortgage()));
        double monthlyInterest = calculator.getInterest() / 100 / 12;
        double mathPower = Math.pow(1 + monthlyInterest, calculator.getMortgage());
        double monthlyPayment = calculator.getPrincipal() * (monthlyInterest * mathPower / (mathPower - 1));
        monthlyPayment = Math.round(monthlyPayment * 100) / 100;
        calculator.setTotal(monthlyPayment);
        calculatorRepository.saveAndFlush(calculator);
        return calculator;
    }

    // @Override
    // @Transactional
    // public void addCalculator(CalculatorDto calculatorDto){
    //     Calculator calculator = new Calculator(calculatorDto);
    //     double total = (calculator.getPrincipal() * calculator.getInterest()) / (1 - Math.pow(1 + calculator.getInterest(), - calculator.getMortgage()));
    //     total = Math.round(total * 100) / 100;
    //     calculator.setTotal(total);
    //     calculatorRepository.saveAndFlush(calculator);
    // }
}
