// IGNORE ESTE ARQUIVO!
function o() { if (confirm("Quer iniciar uma nova rodada?")) { const o = t(),
            a = t(),
            r = t(),
            e = t(),
            u = o.o + a.o,
            c = r.o + e.o;
        console.log("Usuário - cartas:", o.a, a.a, "- pontuação", u), console.log("Computador - cartas:", r.a, e.a, "- pontuação", c), c === u ? console.log("Empate!") : c > u ? console.log("O computador ganhou!") : console.log("O usuário ganhou!") } else console.log("O jogo acabou!") }

function a() { if (confirm("Quer iniciar uma nova rodada?")) { const o = [t(), t()],
            a = [t(), t()]; let r = 0,
            e = confirm("Suas cartas são " + o[0].a + " " + o[1].a + ". A carta revelada do computador é " + a[0].a + ". Deseja comprar mais uma carta?"); for (; e;) { const u = t();
            o.push(u), r = 0; for (let a of o) r += a.o; if (r < 21) { let t = ""; for (let a of o) t += a.a + " ";
                e = confirm("Suas cartas são " + t + ". A carta revelada do computador é " + a[0].a + ". Deseja comprar mais uma carta?") } else e = !1 }
        r = 0; for (let a of o) r += a.o; let u = 0; for (let o of a) u += o.o; let c = r <= 21 && u <= r; for (; c;) { const o = t();
            a.push(o), u = 0; for (let o of a) u += o.o;
            c = r <= 21 && u <= r }
        resultado = r > 21 ? "O computador ganhou!" : u > 21 ? "O usuário ganhou!" : u > r ? "O computador ganhou!" : u < r ? "O usuário ganhou!" : "Empate!"; let s = "",
            n = ""; for (let a of o) s += a.a + " "; for (let o of a) n += o.a + " ";
        alert("Suas cartas são " + s + ". Sua pontuação é " + r + ". As cartas do computador são " + n + ". A pontuação do computador é " + u + ". " + resultado) } else console.log("O jogo acabou!") }

function t() { const o = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][Math.floor(13 * Math.random())]; let a; return { a: o + ["♦️", "♥️", "♣️", "♠️"][Math.floor(4 * Math.random())], o: a = "A" === o ? 11 : "J" === o || "Q" === o || "K" === o ? 10 : Number(o) } }