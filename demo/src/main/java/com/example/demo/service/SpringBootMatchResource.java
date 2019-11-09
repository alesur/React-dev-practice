package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SpringBootMatchResource {

    @Autowired
    private MatchCallerOptions allOptions;


    @GetMapping("/match")
    public String getFullMatchInfo() {
        return allOptions.fullMatch();
    }

    /**
     * @param playerType player Type URI
     * @param name       player's name (will be return SentenceCased)
     * @param kick       will set how much meters will be kicked (ex. ?kick=10 )
     */

    @GetMapping("/match/{playerType}/{name}")
    @ResponseBody
    public String getPlayersType(@PathVariable String playerType, @PathVariable String name, @RequestParam(required = false) String kick) {
        return allOptions.playerInfo(playerType, name, kick);
    }


}
