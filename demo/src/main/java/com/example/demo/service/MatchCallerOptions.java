package com.example.demo.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;


@Service
public class MatchCallerOptions {

    private String name;
    private String playerType;
    private String kick;

    public String getKick() {
        return kick;
    }

    public void setKick(String kick) {
        this.kick = kick;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlayerType() {
        return playerType;
    }

    public void setPlayerType(String playerType) {
        this.playerType = playerType;
    }


    public String fullMatch() {

        return "message";
    }

    public String playerInfo(String playerType, String name, String kick) {


        String normalNameCasee = name.substring(0, 1).toUpperCase() + name.substring(1);

        //JSON like generator

        return "{\"mathch\":{" +
                "\"name\":\"" + normalNameCasee + '\"' +
                ",\"playerType\":\"" + playerType + '\"' +
                kickit(kick) +
                "}}";
    }

    private String kickit(String kick) {
        if (kick != null && StringUtils.isNumeric(kick)) {
            return ",\"kickBall\":\"" + kick + '\"';
        }
        return "";
    }

}





