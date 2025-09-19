// See https://aka.ms/new-console-template for more information
using BreadBuilder.models;
using BreadBuilder.Models;

Baker baker = new Baker();
BreadBuilders breadBuilder = new RyeBreadBuilder();
Bread ryeBread = baker.Bake(breadBuilder);
Console.WriteLine(ryeBread.ToString());

BreadBuilders wheatBreadBuilder = new WheatBreadBuilder();
Bread wheatBread = baker.Bake(wheatBreadBuilder);
Console.WriteLine(wheatBread.ToString());