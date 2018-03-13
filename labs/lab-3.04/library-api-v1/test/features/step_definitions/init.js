/*jshint esversion: 6 */

import apickli from 'apickli';
import {
    defineSupportCode
} from 'cucumber';

defineSupportCode(function ({
    Before
}) {

    Before(function () {
        this.apickli = new apickli.Apickli("http", "localhost:8080/library/v1");
    });
});
