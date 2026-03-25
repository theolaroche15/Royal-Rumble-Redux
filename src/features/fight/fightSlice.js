import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
    ],
    monster: {
        name: "Crypto",
        pv: 800,
        pvMax: 800
        // Notre boss à combattre
        // Exemple: { name: "Dragon", pv: 200, pvMax: 200, strength: 15 }
    },
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const damage = action.payload;
            state.monster.pv = Math.max(0, state.monster.pv - damage);
        },
        hitBack: (state, action) => {
            const playerId = action.payload;
            const player = state.players.find(p => p.id === playerId);
            if (player) {
                player.pv = Math.max(0, player.pv - 5);
            }
        },
    },
});

// Nous exportons le reducer généré automatiquement
export const { hitMonster, hitBack } = fightSlice.actions;
export default fightSlice.reducer;